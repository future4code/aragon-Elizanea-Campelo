/*Exercícios de interpretação de código
Elizanea Campelo

a) Explique o que o código faz. Qual o teste que ele realiza? 
na divisão por resto tem que ser igual a zero - ele realiza se o numero é par

b) Para que tipos de números ele imprime no console "Passou no teste"? 
numeros pares
c) Para que tipos de números a mensagem é "Não passou no teste"?
numeros impares

a) Para que serve o código acima?
identificar o preço da fruta

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
preço 2.25
c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
impressa no console se retirássemos o break que está logo acima do default (o 
break indicado pelo comentário "BREAK PARA O ITEM c.")?
ele vai para default e gera um erro

a) O que a primeira linha está fazendo?
pedindo o numero
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Esse número passou no teste - deveria mostrar que a mensagem é secreta mas dá erro pois não tem o else
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Sim, esta faltando o else

Exercícios de escrita de código
1. qual a idade dele - imprima no console se ele/ela pode dirigi >18
const idade = Number(prompt("Digite a sua idade."))

if (idade>=18){
    console.log("Esta apto a dirigir")
}
else {
    console.log("Aguarde a maioridade")
}
2)  Utilize o bloco if/else
const turnoDoDia=prompt("Digite seu turno:  M (matutino) ou V (Vespertino) ou N (Noturno)")

if (turnoDoDia=="M"){
    console.log("Bom Dia!")    
}
else if (turnoDoDia=="V"){
    console.log("Boa Tarde!")   
}
if (turnoDoDia=="N"){
        console.log("Boa Noite!")
}
3) 
const turnoDoDia = prompt("Digite seu turno:  M (matutino) ou V (Vespertino) ou N (Noturno)")

switch (turnoDoDia) {
  case "M":
    console.log("Bom Dia!") 
    break;
  case "V":
    console.log("Boa Tarde!")
    break;
  case "N":
    console.log("Boa Noite!")
    break;  
  default:
    console.log("Turno não encontrado, digite as iniciais maiuscula")
}

4) 
const genero = prompt("Qual o genero do filme: ")
const preco = Number(prompt("Qual o valor do ingresso: "))

if (genero=="fantasia" && preco<15){
    console.log("Bom Filme !!!")
}
else {
    console.log("Escolha outro filme !!!")
}
*/




