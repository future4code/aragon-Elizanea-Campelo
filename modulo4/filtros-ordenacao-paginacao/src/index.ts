import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getProduct } from "./endpoints/getProduct";
import { postProduct } from "./endpoints/postProduct";
import { deleteProduct } from "./endpoints/deleteProduct";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Get users
app.get("/users", getUsers)

app.get("/products", getProduct);

app.post("/products", postProduct);

app.delete("/products/:id", deleteProduct);
