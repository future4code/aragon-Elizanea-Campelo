import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const deletePerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        
        const perfumeExist = await connection(TABLE_PERFUMES)
            .select()
            .where({ id })

        if (perfumeExist.length === 0) {
            errorCode = 404
            throw new Error("Perfume não encontrado.")
        }


        await connection(TABLE_PERFUMES)
            .delete()
            .where({ id })
      
        res.status(200).send({ message: "Perfume deletado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}