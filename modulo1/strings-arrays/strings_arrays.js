/*Elizanea Campelo
Exerciocios strings-arrays

let array
console.log('a. ', array)

sem numeros

array = null
console.log('b. ', array)

null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

11

let i = 0
console.log('d. ', array[i])

3

array[i+1] = 19
console.log('e. ', array)
[3,19,4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)

9


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
RESPOSTA: DIGITE UMI FRISE - 16

1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

    const nome = prompt("Digite sue nome: ")
    const emailDoUsuario = prompt("Digite seu email: ")
    const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`
    console.log(frase)

2.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
Em seguida, siga os passos: 
a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas,
uma embaixo da outra.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda
comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista


array = [`lasanha vegana , feijoada vegana ,sanduiche , pizza ,doces `]
console.log(`a. ${array}`)



array = ["lasanha vegana" , "feijoada vegana" , "sanduiche", "pizza", "doces" ]

console.log('b. Essas são as minhas comidas preferidas:')
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda 
comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

array = ["lasanha vegana" , "feijoada vegana" , "sanduiche", "pizza", "doces" ]
let comidaPref = prompt("Qual sua comida preferida: ")
let i = 0
array[0+1] = comidaPref
console.log(array)*/