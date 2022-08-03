import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PingController } from './endpoints/PingController'
import { ClassroomController } from './endpoints/ClassroomController'
import {createClass} from "./endpoints/createClass";
import { getClassActive } from './endpoints/getClassActive'
import { putModule } from './endpoints/putModule'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()

app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.post("/class", createClass)
app.get('/class/active', getClassActive)
app.put('/class/:id/module', putModule)
