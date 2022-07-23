import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { cadastroDeUsuario } from './endpoints/cadastroDeUsuario'
import { buscaDeUsuario } from './endpoints/buscaUsuario'
import { cadastroDeProduto } from './endpoints/cadastroDeProduto'
import { buscaProduto } from './endpoints/buscaProduto'
import { registroDeCompra } from './endpoints/registroDeCompra'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003!}`)
})

app.get("/ping", ping)

app.post("/users", cadastroDeUsuario)

app.get("/users", buscaDeUsuario)

app.post("/products", cadastroDeProduto)

app.get("/products", buscaProduto)

app.post("/purchases", registroDeCompra  )