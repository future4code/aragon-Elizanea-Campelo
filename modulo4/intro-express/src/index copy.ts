import express, { Request, Response } from 'express'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())

//app.get('/caminho',(req:Request,res:Response)=>{
//    res.send("Hello Word")

//})

app.get('/users', (req: Request, res: Response) => {

    const headers = req.headers.bananinha
    res.status(200).send("Requisição recebida")
    console.log(headers)

})

app.get('/users/search', (req: Request, res: Response) => {
    const nome = req.query.chave
    res.status(200).send("Query recebida")
    console.log(nome)
})

app.get('/users/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    res.status(200).send("Id recebido")
    console.log (id)

})

app.post('/users',(req:Request, res: Response) =>{
    const body = req.body
    res.status(200).send("Body recebido")
    console.log(body)

})

app.listen(3003, () => console.log(" O Servidor rodando na porta 3003"))