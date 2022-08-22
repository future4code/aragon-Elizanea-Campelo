import { Request, Response } from "express";
import { USER_ROLES } from "../models/User";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../database/UserDatabase";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes()

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public recipeRegistration = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const title = req.body.title
            const description = req.body.description
          

            if (!token) {

                throw new Error("missing token");


            }
            
            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            

            if (!title || !description) {
                throw new Error("missing parameters");

            }

            if (typeof title !== "string") {
                throw new Error("parameters title must be a String");

            }

            if (typeof description !== "string") {
                throw new Error("parameters description must be a String");

            }

            

            if (title.length < 3) {
                throw new Error("the title parameter must have at least 3 characters");

            }

            if (description.length < 10) {
                throw new Error("the description parameter must have at least 10 characters");

            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const recipe = new Recipe(
                id,
                title,
                description,
                new Date(),
                new Date(),
                payload.id
            )

            const recipeDatabase = new RecipeDatabase()
            await recipeDatabase.createRecipe(recipe)

            res.status(201).send({
                message: "Recipe created successfully", recipe
            })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.recipeId
            const title = req.body.title
            const description = req.body.description

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {

                throw new Error("missing payload");


            }

            if (!title || !description) {
                throw new Error("missing parameters");

            }

            if (typeof title !== "string") {
                throw new Error("parameters title must be a String");

            }

            if (typeof description !== "string") {
                throw new Error("parameters description must be a String");

            }


            if (title.length < 3) {
                throw new Error("the title parameter must have at least 3 characters");

            }

            if (description.length < 10) {
                throw new Error("the description parameter must have at least 10 characters");

            }


            const recipeIdDatabase = new RecipeDatabase()
            const isRecipeExists = await recipeIdDatabase.checkIfExistsById(payload.id)

            if (!isRecipeExists) {
                errorCode = 401
                throw new Error("invalid token")
            }

            if (payload.role === USER_ROLES.ADMIN) {

                const recipeDB = await recipeIdDatabase.findById(id)
                const recipe = new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )

                title && recipe.setTitle(title)
                description && recipe.setDescription(description)

                res.status(201).send({ message: "Editing done successfully", recipe })

            } else if (id === payload.id) {

                const recipeDB = await recipeIdDatabase.findById(id)
                const recipe = new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )

                title && recipe.setTitle(title)
                description && recipe.setDescription(description)

                const recipeDataBase = new RecipeDatabase()
                await recipeDataBase.editRecipe(recipe)


                res.status(201).send({
                    message: "Edição realizada com sucesso",
                    recipe
                })

                errorCode = 403
                throw new Error("only admin can access this endpoint");

            }
        } catch (error) {
            if (
                typeof error.message === "string"
                && error.message.includes("Duplicate entry")
            ) {
                return res.status(400).send("Email already taken")
            }
            res.status(errorCode).send({ message: error.message })
        }
    }

    public deleteRecipe = async (req: Request, res: Response) => {
        let errorCode = 400

        try {
              
            const token = req.headers.authorization
            const id = req.params.recipeId

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Missing or invalid token")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipe = await recipeDatabase.findById(id)

            if (payload.role == USER_ROLES.ADMIN) {

                const userDataBase = new UserDatabase()
                const isUserExists = await userDataBase.findById(payload.id)                
    
                if (!isUserExists) {
                    errorCode = 401
                    throw new Error("non-existent user")
                }              
                
                    await recipeDatabase.deleteRecipe(id)
                
                res.status(200).send({message: "receita deletada com sucesso"})

            } else if (payload.role == USER_ROLES.NORMAL) {
                if (recipe.creator_id === payload.id) {
                    await recipeDatabase.deleteRecipe(payload.id)
                }
                errorCode = 401
                throw new Error("you cannot delete a recipe other than your own")
            }
        } catch (error) {

            res.status(errorCode).send({ message: error.message })
            
        }
        
       

    }        
        
}