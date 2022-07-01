/*Exercícios de interpretação de código
1) a)
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'


const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  

  2 
0: nome: 'Amanda Rangel'
1: nome: 'Laís Petra',
2: nome: 'Letícia Chijo'

    const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

3 Nandi
  Laura



const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)
Exercícios de escrita de código
1)a)


const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
  /*const novoArrayA = pets.map((item) => {
      return item.nome 
   })
   
   console.log(novoArrayA)*/


//Crie um novo array apenas com os cachorros salsicha

/*const novoArrayB = pets.filter((item, index, array) => {
   return item.raca === "Salsicha"
})

//console.log(novoArrayB)

//Crie um novo array que possuirá mensagens para enviar para todos os clientes 
//que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 
//10% para tosar o/a [NOME]!"

const novoArrayC = pets.filter((item) => {
   return item.raca === "Poodle"
})
   
console.log(novoArrayC)

const novoArrayCF = novoArrayC.map((item) => {
   return "Você ganhou um cupom de desconto de 10% para tosar o/a," +item.nome
})
console.log(novoArrayCF)
2)
*/

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
/*a) Crie um novo array que contenha apenas o nome de cada item

const novoProduto = produtos.map((produtos) => {
   return produtos.nome 
})

console.log(novoProduto)

b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
aplicando 5% de desconto em todos eles


const novoProdutoB = produtos.map((produtos) => {

   return {nome: produtos.nome, preço: produtos.preco - produtos.preco * 0.05}

})

console.log(novoProdutoB)

C)Crie um novo array que contenha apenas os objetos da categoria Bebidas


const produtoBebidas = produtos.filter((produtos) => {
   return produtos.categoria === "Bebidas"
})
   
console.log(produtoBebidas)

d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"*/

const produtoYpe = produtos.filter((produtos) => {
   return produtos.nome.includes("Ypê")
})
   
console.log(produtoYpe)

//E) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtoYpeFrase = produtoYpe.map((produtoYpe) => {
   return `Compre  ${produtoYpe.nome} por  ${+produtoYpe.preco}`
})
   
console.log(produtoYpeFrase)