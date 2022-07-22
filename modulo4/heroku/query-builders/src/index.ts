import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createPerfume } from "./endpoints/createPerfume";
import { deletePerfume } from "./endpoints/deletePerfume";
import { putPerfume } from "./endpoints/putPerfume";
import { getPerfume } from "./endpoints/getPerfume";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

app.post("/perfume", createPerfume)

app.delete("/perfume/:id", deletePerfume)

app.put("/perfume/:id", putPerfume)

app.get("/perfume", getPerfume)