import { ICreateIngredientesProdInput, IGetProductosDB, IProductDB, IIngredienteDB, IIngredientesProductsDB } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Pizzaria_Products"
    public static TABLE_INGREDIENTES = "Pizzaria_Ingredientes"
    public static TABLE_INGREDIENTES_PRODUCTS = "Pizzaria_Ingredientes_Products"

    public getAllProducts = async (input: IGetProductosDB): Promise <IProductDB[] | undefined> => {
        const {
            order,
            sort,
            limit,
            offset
        } = input

        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)

        return result   
    }

    public getIngredientes = async (idProduct: string) => {
        const id = idProduct

        const result = await BaseDatabase
        .connection.raw(`
        SELECT Pizzaria_Ingredientes.ingrediente
        FROM Pizzaria_Ingredientes
        JOIN Pizzaria_Ingredientes_Products
        ON Pizzaria_Ingredientes_Products.ingrediente_id = Pizzaria_Ingredientes.id
        WHERE Pizzaria_Ingredientes_Products.product_id = ${id};`)
 
        return result[0]
    }
  
    public searchProduct = async (search: string): Promise <IProductDB[] | undefined> => {
        const busca = search 

        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .whereLike("name", `%${busca}%`)
        .orWhereLike("id", `%${busca}`) 

        return result
    }
    
    public getProductsById = async (id: string): Promise <IProductDB | undefined> => {

        const [result] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where("id", "=", `${id}`)

        return result
    } 

    public getProductsByIngredientes = async (ingrediente: string): Promise <any>  => {
   
        const [idIngrediente]: IIngredienteDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_INGREDIENTES)
        .select("id")
        .whereLike("ingrediente", `%${ingrediente}%`)
        
        const result = await BaseDatabase
        .connection(ProductDatabase.TABLE_INGREDIENTES_PRODUCTS)
        .select("product_id")
        .where({ingrediente_id: idIngrediente.id})
          
        return result 
    }

    public createProduct = async (input: IProductDB) => {
        const {
            id,
            name,
            price
        } = input

        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .insert({
            id, 
            name,
            price
        })
    }

    public createIngredientesProduct = async (input: ICreateIngredientesProdInput) => {
        const {
            id,
            product_id,
            ingrediente_id
        } = input
 
        await BaseDatabase
        .connection(ProductDatabase.TABLE_INGREDIENTES_PRODUCTS)
        .insert({
            id,
            product_id,
            ingrediente_id
        })
    }

    public deleteProduct = async (idToDelete: string) => {
        const id = idToDelete

        await BaseDatabase
        .connection(ProductDatabase.TABLE_INGREDIENTES_PRODUCTS)
        .delete()
        .whereLike("product_id", `${id}`)

        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .delete()
        .where({ id })
    }
}