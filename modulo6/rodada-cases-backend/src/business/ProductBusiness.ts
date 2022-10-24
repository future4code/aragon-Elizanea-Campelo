import { ProductDatabase } from "../database/ProductDatabase"
import { IGetProductOutputDTO, IGetProductDBDTO, IGetProductinputDTO, ICreateProductInputDTO, ICreateProductOutputDTO, Product } from "../models/Produto"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"


export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private authebticator: Authenticator

    ) { }

    public createProduct = async (input: ICreateProductInputDTO) => {
        const { token, name, tag } = input
        const payload = this.authebticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("not authorized");

        }
        if (typeof name !== "string") {
            throw new RequestError("invalid parameter: Nome");

        }

        if (name.length < 1) {
            throw new RequestError("Invalid 'name' parameter: minimum 3 characters");

        }

        if (payload.role === USER_ROLES.NORMAL) {
            throw new UnauthorizedError("Only admins can create products");

        }

        const id = this.idGenerator.generate()
        const product = new Product(
            id,
            name,
            tag,
        )

        await this.productDatabase.createProduct(product)
        const response: ICreateProductOutputDTO = {
            message: "Product created successfully",
            product
        }
        return response
    }

    public getProducts = async (input: IGetProductinputDTO) => {

        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        const getProductDB: IGetProductDBDTO = {
            order,
            sort,
            limit,
            offset

        }

        const productDB = await this.productDatabase.getProducts(getProductDB)
        const products = productDB.map((productDB) => {
            return new Product(
                productDB.id,
                productDB.name
            )

        })
        for (let product of products) {
            const tags: any = await this.productDatabase.getTags(product.getId())
            product.setTag(tags)
        }

        const response: IGetProductOutputDTO = {
            products
        }

        return response

    }

    public getSearchByNameAndId = async (search: string) => {

        const productsDB = await this.productDatabase.getBySearch(search)
        const response: any = {
            productsDB
        }
        return response
    }

    public getProductsTag = async (search: string) => {

        const tag = await this.productDatabase.getIdTag(search)
        const tagId = tag?.map(item => item.id)
        const products = await this.productDatabase.getSearchProductByTag(tagId[0])
        const response: any = {
            products
        }
        return response

    }
}