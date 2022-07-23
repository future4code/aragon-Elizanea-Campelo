import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES } from "../database/tableNames";
import { Purchase } from "../models/Purchase";

export const registroDeCompra = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const user_id = req.body.user_id as string
        const product_id = req.body.product_id as string
        const quantity = Number(req.body.quantity)

        if (typeof quantity !== "number") {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number.")
        }

        if (quantity <= 0) {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number maior que 0.")
        }

        const [product] = await connection.raw(`
        SELECT * FROM ${TABLE_PRODUCTS}
        WHERE id LIKE ${product_id};
        `)
        const total_price = Number(product[0].price) * quantity

        const newPurchase: Purchase = {
            id: Date.now().toString(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price
        }

        await connection(TABLE_PURCHASES)
            .insert({
                id: newPurchase.id,
                user_id: newPurchase.user_id,
                product_id: newPurchase.product_id,
                quantity: newPurchase.quantity,
                total_price: newPurchase.total_price
            })

        res.status(200).send({ compra: newPurchase, message: "Compra criado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}