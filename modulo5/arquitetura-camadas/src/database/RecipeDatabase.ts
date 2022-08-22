import { IRecibeDB, Recipe } from "../models/Recipe";
import { BaseDatabase } from "./BaseDatabase";
import { UserDatabase } from "./UserDatabase";


export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes"

    public createRecipe =async (recipe:Recipe) => {

        const recipeDB: IRecibeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            create_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdateAt(),
            creator_id: recipe.getCreatorId()
        }

        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .insert(recipeDB)
        
    }

    public getRecipes = async (search:string, sort: string, limit: number, offset: number) => {

        const recipeDB: IRecibeDB[] = await BaseDatabase
              .connection(RecipeDatabase.TABLE_RECIPES)
              .select()
              .where(`title`, "LIKE", `%${search}%`)
              .orderBy(`updated_at`, sort)
              .limit(limit)
              .offset(offset)
            return recipeDB
        
    }

    public findRecipeById =async (id:string) => {
        const recipeDB: IRecibeDB[] = await BaseDatabase
              .connection(RecipeDatabase.TABLE_RECIPES)
              .select()
              .where({id})

        return recipeDB[0]
        
    }

    public updateRecipe =async (recipe:Recipe) => {

        const recipeDB: IRecibeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            create_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdateAt(),
            creator_id: recipe.getCreatorId()
        
        }

        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .update(recipeDB)
        .where({id: recipeDB.id})

    }

    public deleteRecipeById =async (id:string) => {

        await BaseDatabase
              .connection(RecipeDatabase.TABLE_RECIPES)
              .select()
              .where({id})
        
    }

    public deleteRecipeFromUser =async (userId:string) => {

        const recipesDB: IRecibeDB[] = await BaseDatabase
              .connection(RecipeDatabase.TABLE_RECIPES)
              .select()
              .where({creator_id: userId})
        for (let recipeDB of recipesDB){
              await this.deleteRecipeById(recipeDB.id)
        }
        
    }

    
}