import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const putPerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id  as string
        const price = Number(req.body.price)

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number maior que 0.")
        }

        

        const perfumeExist = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

        if (perfumeExist.length === 0) {
            errorCode = 404
            throw new Error("Perfume não encontrado.")
        }

        
        await connection(TABLE_PERFUMES)
            .update({
                price: price
            })
            .where({
                id: id
            })
      
        res.status(200).send({ message: "Preço do perfume editado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}