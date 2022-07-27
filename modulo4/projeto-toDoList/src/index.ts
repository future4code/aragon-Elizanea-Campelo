import express, { Request, Response } from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Siga o exemplo do ping acima e monte seus endpoints abaixo!
<<<<<<< HEAD
app.get("/users/search", async (req: Request, res: Response) => {
=======
app.get("/users", async (req: Request, res: Response) => {
>>>>>>> a3ce580bd552a2de21162e3d8998fa3408bbe32c
  let errorCode = 400
  try {
    const search = Number(req.query.search)
    if (search) {

      const [result] = await connection.raw(`
  SELECT * FROM Users
  WHERE id LIKE "%${search}%"`)
      return res.status(200).send({ users: result })
    }
    const [result] = await connection.raw(`
  SELECT * FROM Users;`)
    res.status(200).send({ users: result })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })

  }
})

<<<<<<< HEAD
app.get("/tasks/:searchT", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const searchT = req.query.search
    if (searchT) {

      const [resultTask] = await connection.raw(`
  SELECT * FROM Tasks
  WHERE title LIKE "%${searchT}%"`)
      return res.status(200).send({ tasks: resultTask })
    }
    const [resultTask] = await connection.raw(`
  SELECT * FROM Users;`)
    res.status(200).send({ tasks: resultTask })
=======
app.get("/tasks", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search
    if (search) {

      const [result] = await connection.raw(`
  SELECT * FROM Tasks
  WHERE title LIKE "%${search}%"`)
      return res.status(200).send({ tasks: result })
    }
    const [result] = await connection.raw(`
  SELECT * FROM Users;`)
    res.status(200).send({ tasks: result })
>>>>>>> a3ce580bd552a2de21162e3d8998fa3408bbe32c

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })

  }
})

app.get("/tasks/:taskId/users", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
<<<<<<< HEAD
    const taskId = Number(req.params.taskId)

    if (!taskId) {
=======
    const taskId = req.params.taskId as string

    if (!taskId || taskId === "") {
>>>>>>> a3ce580bd552a2de21162e3d8998fa3408bbe32c
      errorCode = 422
      throw new Error(`non-existent ID, enter the correct ID.`)
    }

    const [result] = await connection.raw(`
          SELECT * FROM Tasks
          WHERE id = "${taskId}";
      `)
    if (!result[0]) {
      errorCode = 404
      throw new Error(`non-existent task`)
    }

    const [resultTasks] = await connection.raw(`
          SELECT id, nickname FROM Users
          JOIN Responsibles
          ON Responsibles.userId = Users.id
          WHERE Responsibles.taskId = "${taskId}"; 
      `)

    return res.status(200).send({ users: resultTasks })
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
<<<<<<< HEAD
})

app.post("/tasks/:taskId/users", async (req:Request,res:Response) => {
  let errorCode = 400

  try {

    const userId = req.body.userId

    const taskId = Number(req.params.taskId)

    const [ tasks ] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `)

    const taskFound = tasks[0]

    if (!taskFound) {
      errorCode = 404
      throw new Error("task already exist")
    }  

    if (taskFound) {

      await connection.raw(`
      INSERT INTO Responsibles
      VALUES (${userId},${taskId});
      `)
    }  

    res.status(200).send({
      message:"responsible defined",
      create: `userId: ${userId}, taskId:${taskId}` 
      })


  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})


=======
})
>>>>>>> a3ce580bd552a2de21162e3d8998fa3408bbe32c
