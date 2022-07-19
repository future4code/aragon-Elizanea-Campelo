import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"


//exercicio4
export const deleteProduct = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = req.params.id as string

        

        const [product] = await connection.raw(`
        SELECT * FROM ${TABLE_PRODUCTS}
        WHERE id = ${id};
        `)

        if (!product[0]) {
            errorCode = 404
            throw new Error("ID inexistente");
        }

        await connection.raw(`
      DELETE FROM ${TABLE_PRODUCTS}
      WHERE id = ${id};
      `)

        res.status(200).send({ mensagem: "Produto deletado." })
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
} 