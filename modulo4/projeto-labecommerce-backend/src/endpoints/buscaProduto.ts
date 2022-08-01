import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const buscaProduto = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.query.name
        const sort = req.query.sort || "name"
        const order = req.query.order || "asc"
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)

        if (name) {
            const [ produtoResult ] = await connection
                .raw(`SELECT * FROM ${TABLE_PRODUCTS}
                WHERE name LIKE "%${name}%"                 
                ORDER BY ${sort} ${order}
                LIMIT ${limit}
                OFFSET ${offset};`)
            
            return res.status(200).send({ users: produtoResult })
        }

        const [ produtoResult ] = await connection
            .raw(`SELECT * FROM ${TABLE_PRODUCTS}
            ORDER BY ${sort} ${order}
            LIMIT ${limit}
            OFFSET ${offset};`)
        res.status(200).send({ users: produtoResult })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}