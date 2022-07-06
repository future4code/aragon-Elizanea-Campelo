import express, { Request, Response } from 'express'
import cors from 'cors'

const playlists = [
    {
        id: 1,
        nome: "Rock"
    },
    {
        id: 2,
        nome: "pop"
    }
]
const app = express()
app.use(express.json())
app.use(cors())

app.get('/playlist', (req: Request, res: Response) => {
    res.status(200).send(playlists)
})

app.get('/playlist/:id', (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const playlist = playlists.filter(playlist => playlist.id === id)
    console.log(playlist)

    res.status(200).send(playlist)

})


app.get('/playlists/search', (req: Request, res: Response) => {
    const { nome } = req.query
    console.log(nome)

    //res.status(200).send(nome)

    const filterPlaylist = playlists.filter(playlist => playlist.nome === nome)
    res.status(200).send(filterPlaylist)
})

app.post('/playlist',(req:Request, res:Response)=>{
    const {id,nome} = req.body

    playlists.push({id,nome})

    res.status(201).send(playlists)
})
app.listen(3003, () => console.log(" O Servidor rodando na porta 3003"))