//## Exercício 1
//Crie uma variável chamada ano, do tipo string, e atribua um valor a ela. Em seguida,
// tente reatribuir um número a esta variável. O que acontece? Como fazer para que 
//esta variável também aceite number?



//Resposta: Dá Erro, poais a variavel do tipo string não pode receber um numero. 
//Se ela for do tipo any, ela aceita qualquer tipo
//let anoVar:string="1978"
let anoVar: any = "1978"
anoVar = 1978

//Exercício 2
//Crie 1 objeto que representa a sua pessoa e possua 3 propriedades:
//nome, de tipo string;
//idade, de tipo number;
//corFavorita, enum das cores do arco-íris.


enum corfavorita {
    ROSA = "Rosa",
    VERDE = "Verde",
    AZUL = "Azul",
    AMARELO = "Amarelo"
}

type Pessoa = {
    nome: string,
    idade: number,
    cor: corfavorita
}

const eliz: Pessoa = {
    nome: "Elizanea",
    idade: 43,
    cor: corfavorita.AMARELO
}

function imprimeUsuario(eliz: Pessoa) {
    console.log(eliz)
}
imprimeUsuario(eliz)

//Parte 1

//Quais são as entradas e saídas dessa função: Number

function obterEstatisticas(numeros: any) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([1, 2, 3, 8, 10]))

//Exercício 4
//entrada: string e saida array

type Posts = {
    autor: string,
    texto: string
}[]

const post: Posts = [

    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }

]

function buscarPostsPorAutor(post: Posts, autorInformado: string) {
    return post.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
} []

console.log(buscarPostsPorAutor(post, "Lord Voldemort" ))