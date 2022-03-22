/*1 a) false - b)false C)- True d) Boleano
 2) Sim o prompt quando recebe o numero ele vem como string, ele precisaria colocar Number que converte string em numero.
 3) precisa incluir NUmber então ficaria assim - let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

Exercícios de escrita de código 
1º Questão

let idadeUsuario = Number(prompt("Digite sua Idade: "))
let idadeSeuAmigo = Number(prompt("Qual a idade de seu amigo(a)"))
diferencaIdade=idadeUsuario-idadeSeuAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario>idadeSeuAmigo)
console.log("a diferença de idade é: ", diferencaIdade)

2º Questão

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código; 
o padrão é que o resto da divisão é zero
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código; 
o padrão é que o resto da divisão é diferente de zero = 1

let numPar = Number(prompt("Digite um Numero Par"))
restoDivisao=numPar%2
console.log("O resto da divisão é: ", restoDivisao)

3º Questão

let idadeUsuario = Number(prompt("Digite sua Idade: "))
idade_Meses = idadeUsuario*12
idade_Dias = idadeUsuario*365
Idade_Horas = idadeUsuario*24
console.log("Sua idade em anos: ", idadeUsuario, "Sua Idade em meses: ", idade_Meses, "Sua Idade em dias: ", idade_Dias, "Sua Idade em Horas: ", Idade_Horas)

4º Questão
let primeiroNumero = Number(prompt("Digite o primeiro número:"))
let segundoNumero = Number(prompt("Digite o segundo número:"))

console.log ("O primeiro número é maior que segundo?: ", primeiroNumero>segundoNumero)
console.log ("O primeiro número é igual ao segundo?:", primeiroNumero===segundoNumero)
console.log ("O primeiro número é divisível pelo segundo?:", (primeiroNumero%segundoNumero)===0) 
console.log ("O segundo número é divisível pelo primeiro?:", (segundoNumero%primeiroNumero)===0)*/