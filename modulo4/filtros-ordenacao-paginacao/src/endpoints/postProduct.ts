import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const postProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id as string
        const name = req.body.name as string
        const price = Number(req.body.price)

        if(!id || !name || !price || id === "" || name === ""){
            errorCode = 400
            throw new Error(`Id inexistente, favor infomar um Id Válido!`)
        }

        if(typeof id !== "string" || typeof name !== "string"){
            errorCode = 400
            throw new Error("Id e Nome deve ser uma string")
        }

        if(typeof price !== "number" || price <= 0){
            errorCode = 400
            throw new Error("preço devera ser maior que 0")
        }

        await connection.raw(`
            INSERT INTO ${TABLE_PRODUCTS}
            VALUES ("${id}", "${name}", ${price});
        `)

        const [result] = await connection.raw(`
            SELECT * FROM ${TABLE_PRODUCTS}
            WHERE id = "${id}";
        `)
        return res.status(200).send({ message: "Produto criado com sucesso!", products: result })

    } catch (err) {
        res.status(errorCode).send({ message: err.message })
    }
} 