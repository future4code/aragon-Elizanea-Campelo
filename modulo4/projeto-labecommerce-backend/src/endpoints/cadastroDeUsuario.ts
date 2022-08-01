import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "../models/User";



export const cadastroDeUsuario = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            errorCode = 422;
            throw new Error("Parâmetros Vazio, favor preencher corretamente!"
            );
        }

        if (typeof email !== "string") {
            errorCode = 422;
            throw new Error("Parâmetro 'email' deve ser string");
        }

        if (typeof password !== "string") {
            errorCode = 422;
            throw new Error("Parâmetro 'password' deve ser string");
        }

        const newUser: User = {
            id: Date.now().toString(),
            email: email,
            password: password,
        };

        await connection(TABLE_USERS).insert({
            id: newUser.id,
            email: newUser.email,
            password: newUser.password,
        });

        res.status(201).send({ usuário: newUser, message: "Usuário criado com sucesso!" });
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message });
    }
};