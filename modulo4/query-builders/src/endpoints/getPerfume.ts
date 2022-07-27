import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const getPerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.query.name
        const brand = req.query.brand
        const sort = req.query.sort || "name"
        const order = req.query.order || "asc"
        const limit = Number(req.query.limit) || 20
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)

        if (name || brand) {
            const [ perfumeResult ] = await connection
                .raw(`SELECT * FROM ${TABLE_PERFUMES}
                WHERE name LIKE "%${name}%" OR "%${brand}%"                
                ORDER BY ${sort} ${order}
                LIMIT ${limit}
                OFFSET ${offset};`)
            
            return res.status(200).send({ users: perfumeResult })
        }

        const [ perfumeResult ] = await connection
            .raw(`SELECT * FROM ${TABLE_PERFUMES}
            ORDER BY ${sort} ${order}
            LIMIT ${limit}
            OFFSET ${offset};`)
        res.status(200).send({ users: perfumeResult })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}