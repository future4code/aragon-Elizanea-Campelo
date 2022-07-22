import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume";

export const createPerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const name = req.body.name as string
        const brand = req.body.brand as string
        const price = Number(req.body.price)
        const ml = Number(req.body.ml)
        
        if (!name || !price || !brand) {
            throw new Error("Parâmetros 'name' ou 'price' ou 'brand' faltando.")
        }

        if (typeof name !== "string") {
            errorCode = 422
            throw new Error("Parâmetro 'name' deve ser string.")
        }

        if (typeof brand !== "string") {
            errorCode = 422
            throw new Error("Parâmetro 'brand' deve ser string.")
        }

        if (typeof ml !== "number") {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number.")
        }

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number maior que 0.")
        }

        const newPerfume: Perfume = {
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price: price,
            ml: ml

        }

        await connection(TABLE_PERFUMES)
            .insert({
                id: newPerfume.id,
                name: newPerfume.name,
                brand: newPerfume.brand,
                price: newPerfume.price,
                ml: newPerfume.ml
            })
      
        res.status(200).send({ perfume: newPerfume, message: "Perfume criado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}