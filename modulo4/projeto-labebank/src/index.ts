import express, { Request, Response } from "express"
import cors from "cors"
import { Usuario, usuarios } from "./usuario"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})


app.get("/teste", (req: Request, res: Response) => {
    res.send({
        message: "Servidor App Funcionando"
    })
})


app.get("/users/:id", (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)

        const indexId: number = usuarios.findIndex((usuario) => usuario.id === id)

        if (indexId < 0) {
            errorCode = 400
            throw new Error("Error: Id inexistente")
        }

        const resultado: any = usuarios.filter(usuario => usuario.id === id)

        const saldo: any = resultado.map((item: any) => {
            return item.saldo
        })

        res.status(200).send({ message: "id Selecionado", usuarios: resultado, saldo:saldo })

    } catch (error) {
        res.send({ message: error.message })
    }
})


app.put("/users/:id", (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)

        

        const { saldo } = req.body

        

        if (typeof saldo !== "number" || saldo <= 0) {
            errorCode = 422
            throw new Error("Error: saldo deve ser um valor ou deve ser maior que zero")
        }

        const resultado: any = usuarios.filter(usuario => usuario.id === id)

        const novoSaldo: number = resultado.map((item: any) => {
            return item.saldo + saldo
        })

        res.status(200).send({
            message: "Saldo Atualizado",
            usuarios: novoSaldo
        })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})



app.put("/users/:id/pay", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const id = Number(req.params.id);

        const indexId: number = usuarios.findIndex(usuario => usuario.id === id)
        

        const { valorDaConta, descricaoContaPagar } = req.body

        if (indexId < 0) {
            errorCode = 409
            throw new Error("Error: Id inexistente")
        }

        if (!valorDaConta || !descricaoContaPagar) {
            errorCode = 422
            throw new Error("Error: O valor da conta e a descrição da conta a pagar devem existir.")
        }

        if (typeof valorDaConta !== "number" || typeof descricaoContaPagar !== "string") {
            errorCode = 422
            throw new Error("Error: O tipo de valor da conta deve ser um número e a descrição do tipo de conta a pagar deve ser uma string.")
        }

        if (valorDaConta <= 0 || descricaoContaPagar.length < 6) {
            errorCode = 422
            throw new Error("Error: O valor da conta deve ser um número maior que zero e a descrição da conta a pagar deve ter mais de 6 caracteres.")
        }

        const resultado: any = usuarios.filter(usuario => usuario.id === id)
        const novoSaldo: number = resultado.map((item: any) => {
            return item.saldo - valorDaConta
        })

        res.status(200).send({
            message: "Saldo Atualizado",
            usuarios: novoSaldo
        })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {

        const { nome, cpf, aniversario } = req.body

        if (!nome || !cpf || !aniversario) {
            errorCode = 422
            throw new Error("Error: nome, CPF ou aniversario inexistentes.")
        }


        if (typeof nome !== "string" || typeof cpf !== "string" || typeof aniversario !== "string") {
            errorCode = 422
            throw new Error("Error: nome, CPF ou aniverasrio deverá ser string.")

        }

        const cpfIndex: number = usuarios.findIndex(usuario => usuario.cpf === cpf)

        const tempoDecorrido = Date.now()
        const hoje: any = new Date(tempoDecorrido)
        const dataAtual: any = hoje.toLocaleDateString()
        const actualDateSplitted: any = dataAtual.split("/")
        const anoAtual: number = actualDateSplitted[2]

        const birthSplitted: any = aniversario.split("/")
        const birthYear: number = birthSplitted[2]

        const checkIdade: number = anoAtual - birthYear

        console.log(`usuario tem ${checkIdade} anos.`)

        if (cpfIndex < 0) {

            if (checkIdade >= 18) {

                if (nome.length > 3) {

                    const novoUsuario: Usuario = {
                        id: Date.now(),
                        nome: nome,
                        cpf: cpf,
                        aniversario: aniversario,
                        saldo: 0,
                        extrato: [{
                            valorDaConta: 0,
                            descricaoContaPagar: "",
                            dataDePagamento: ""
                        }]
                    }

                    usuarios.push(novoUsuario)
                    res.status(200).send({
                        message: "Cliente cadastrado com Sucesso",
                        usuarios: usuarios,
                    })
                }
                errorCode = 422
                throw new Error("Error: O nome deve ter mais de 3 caracteres")
            }
            errorCode = 422
            throw new Error("Error: O cliente deve ter mais de 18 anos")
        }
        errorCode = 422
        throw new Error("Error: CPF já cadastrado.")

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})
