import { IGetProductDBDTO, IProductDB, ITagDB, Product } from "../models/Produto";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    

    public toProductDBModel = (product: Product) => {

        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName()

        }
        return productDB
    }



    public getProducts = async (input: IGetProductDBDTO): Promise<IProductDB[] | undefined> => {

        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const productDB: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)


        return productDB
    }

    public createProduct =async (product:Product) => {
        const ProductDB = this.toProductDBModel(product)

        await BaseDatabase
              .connection(ProductDatabase.TABLE_PRODUCTS)
              .insert(ProductDB)
        
    }

    public getTags =async (id:string): Promise<IProductDB[]> => {
        const result = await BaseDatabase.connection.raw(`
        SELECT Amaro_Tags.name
        FROM Amaro_Products_Tags
        JOIN Amaro_Tags
        ON Amaro_Products_Tags.tag_id = Amaro_Tags.id
        WHERE Amaro_Products_Tags.product_id = "${id}"`)
        return result[0]
        
    }
    public getBySearch =async (search:string): Promise<IProductDB[]> => {
        const productsDB: IProductDB[] = await BaseDatabase
              .connection(ProductDatabase.TABLE_PRODUCTS)
              .select()
              .whereLike("id", `%${search}%`)
              .orWhereLike("name", `%${search}%`)
        return productsDB
        
    }
    public getSearchProductByTag =async (search:string): Promise<ITagDB> => {

        const [result] = await BaseDatabase
              .connection.raw(`
              SELECT Amaro_Products.id, Amaro_Products.name
              FROM Amaro_Products_Tags
              JOIN Amaro_Tags
              ON Amaro_Products_Tags.tag_is = Amaro_Tags.id
              JOIN Amaro_Products
              ON Amaro_Products_Tags.product_id = Amaro_Products.id
              WHERE Amaro_products_Tag.id = "${search}"
              `)
        return result
        
    }

    getIdTag =async (tag:string): Promise<ITagDB[]> => {
        const result: ITagDB[] = await BaseDatabase.connection(ProductDatabase.TABLE_TAGS)
              .select()
              .where({tag})

              return result
        
    }

}