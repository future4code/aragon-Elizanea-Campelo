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
app.get("/users/search", async (req: Request, res: Response) => {
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

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })

  }
})

app.get("/tasks/:taskId/users", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const taskId = Number(req.params.taskId)

    if (!taskId) {
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

