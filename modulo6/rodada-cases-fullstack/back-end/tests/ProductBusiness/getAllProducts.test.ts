import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { IGetProductosInputDTO } from "../../src/models/Product"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("getAllProducts bem sucedido", async () => {
        const input: IGetProductosInputDTO = {
            order: "price",
            sort: "ASC",
            limit: "10",
            page: "1"
        }

        const response = await productBusiness.getAllProducts(input)

        expect(response.message).toEqual("Requisição realizada com sucesso!")
        expect(response.products).toEqual([
          {
            "nome" : " Marguerita " ,
            "preço" : 5 ,
            "ingredientes" : [
              " tomate " ,
              " mussarela "
            ]
          },
          
          {
            "nome" : " Romana " ,
            "preço" : 5 ,
            "ingredientes" : [
              " tomate " ,
              " mussarela " ,
              " anchovas " ,
              " orégano " ,
              " óleo "
            ]
          },
          {
            "nome" : " Pizza Branca " ,
            "preço" : 5 ,
            "ingredientes" : [
              " mussarela " ,
              " orégano "
            ]
          },
          {
            "nome" : " Búfala " ,
            "preço" : 6 ,
            "ingredientes" : [
              " tomate " ,
              " mussarela de búfala "
            ]
          },
          {
            "nome" : " Diavola " ,
            "preço" : 7.5 ,
            "ingredientes" : [
              " tomate " ,
              " mussarela " ,
              " salame picante "
            ]
          }
          
          ])
    })
})