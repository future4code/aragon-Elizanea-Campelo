import { IProduct, IProductDB, ICreateIngredientesProdInput } from "../../src/models/Product";
import { BaseDatabase } from "../../src/database/BaseDatabase";

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Pizzaria_Products"
    public static TABLE_INGREDIENTES = "Pizzaria_Ingredientes"
    public static TABLE_INGREDIENTES_PRODUCTS = "Pizzaria_Ingredientes_Products"

    public getAllProducts = async (): Promise<IProductDB[] | undefined > => {
        return [
            {
                "id": "1",
                "name": "Marguerita",
                "price": 5.00
              },
              {
                "id": "2",
                "name": "Búfala",
                "price": 6.00
              },
              {
                "id": "3",
                "name": "Romana",
                "price": 5.00
              },
              {
                "id": "4",
                "name": "Diavola",
                "price": 7.50
              },
              {
                "id": "4",
                "name": "Pizza BrancaA",
                "price": 5.00
              }
        ] 
    }

    public getIngredientes = async (idProduct: string) => {
    switch (idProduct) {
        case "1":
            return [
                { ingrediente: 'orégano' },
                { ingrediente: 'tomate' },
                { ingrediente: 'salame picante' },
                { ingrediente: 'anchovas' },
                { ingrediente: 'óleo' }
            ]
            case "2":
                return []
                default:
                    return undefined
    }
}
  
    public searchProduct = async (search: string): Promise<IProductDB[] | undefined> => {
    switch(search){
        case "Marguerita":
            return [
                {
                    "id": "1",
                    "name": "Marguerita",
                    "price": 5.00
                }
              ]
              case "4":
                return [
                    {
                        "id": "4",
                        "name": "Diavola",
                        "price": 7.50
                    }
                  ]
                  case "Búfala":
                    return [
                        {
                          "id": "2",
                          "name": "Búfala",
                          "price": 6
                        }]
                default:
                    return undefined
            
    }
}
    
    public getProductsById = async (id: string): Promise<IProductDB | undefined> => {
        switch(id){
            case "1":
                return {
                      "id": "1",
                      "name": "Marguerita",
                      "price": 5
                    }
                    case "2":
                    return {
                        "id": "2",
                        "name": "Búfala",
                        "price": 6
                      }
                      
                      default:
                    return undefined
        }
} 

    public getProductsByIngrediente = async (ingrediente: string): Promise <any> => {
        switch(ingrediente){
            case "óleo":
                return [
                    { product_id: '1' },
                    { product_id: '2' },
                    { product_id: '3' }
                  ]
        }
}

    public createProduct = async (input: IProductDB) => {
    
}

    public createIngredientesProduct = async (input: ICreateIngredientesProdInput) => {
    
}

    public deleteProduct = async (idToDelete: string) => {

}
}