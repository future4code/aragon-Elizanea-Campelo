import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { BaseError } from "../../src/errors/BaseError"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("getProductsByIngrediente bem sucedido", async () => {
        const ingrediente = "tomate"

        const response = await productBusiness.searchProduct(ingrediente)

        expect(response.message).toEqual("Requisição realizada com sucesso!")
        expect(response.products).toEqual([
            {
              "id": "1",
              "name": "Marguerita",
              "price": 5
            },
            {
              "id": "2",
              "name": "Búfala",
              "price": 6
            },
            
          ])
    })

    test("deve retornar erro, caso não seja enviado nenhum ingrediente", async () => {

        try {
            const ingrediente = ""

            await productBusiness.getProductsByIngredientes(ingrediente)
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Seleciona uma ingrediente para buscar produtos")
            }
        }
    })
})