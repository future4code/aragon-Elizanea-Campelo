import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { ICreateProductInputDTO, IGetProductinputDTO } from "../models/Produto"
import { BaseError } from "../errors/BaseError"

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    public createProduct = async (req: Request, res: Response) => {
        try {
            const input: ICreateProductInputDTO = {
                token: req.headers.authorization,
                name: req.body.name,
                tag: req.body.tag
            }

            const response = await this.productBusiness.createProduct(input)
            res.status(201).send(response)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Unexpected error creating product" })

        }

    }

    public getProducts = async (req: Request, res: Response) => {

        try {
            const input: IGetProductinputDTO = {

                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }
            const response = await this.productBusiness.getProducts(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })

            }
        }

        res.status(500).send({ message: 'Error when searching for product' })

    }

    public getProductSearchByNameOrId = async (req: Request, res: Response) => {
        try {
            const search = req.query.q as string
            const response = await this.productBusiness.getSearchByNameAndId(search)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({message:error.message})

        }

    }


}

