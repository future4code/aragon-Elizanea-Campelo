/*Elizanea Campelo
Exerciocios Funções

1) QUestão
10
50
2) QUestão
a) torna o texto maiusculo e procura pela palavra CENOURA
B) true - true - true

Exercícios de escrita de código
1) QUestão
a)

 function imprimiDeclaracao(){
	
    const declaracao = "Eu sou Eliz, tenho 43 anos, moro em Recife e sou estudante."
   
    console.log(`Ola, ${declaracao}`)
     
}    
imprimiDeclaracao()

b)


function imprimiApresentacao(nome,idade,local,profissao) {
        
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${local} e sou ${profissao}.`) 
   
}
imprimiApresentacao("Eliz","43", "Recife", "estudante")  

2) QUestão

a) função que receba 2 números  faça a soma das duas entradas retorne o resultado

function imprimirSoma(num1,num2) {

    let soma = num1 + num2
        
    console.log(`o resultado da soma: ${soma}`) 

    return imprimirSoma(num1,num2))
   
}
console.log(imprimirSoma(Number(prompt("Digite o numero 1")), Number(prompt("Digite o nuemro 2: "))))

b)  recebe 2 números retorne um booleano  primeiro número é maior ou igual ao segundo



function imprimirCompracao(num1,num2) {

    let expComp = num1 >= num2
        
    console.log(`o resultado da soma: ${expComp}`) 

    return imprimirCompracao()
   
}

console.log(imprimirCompracao(Number(prompt("Digite o numero 1")), Number(prompt("Digite o nuemro 2: "))))

c)  receba um número e devolva um booleano indicando se ele é par ou não




function imprimirVerificacao(num1) {

    
    let verificpar = (num1 % 2) == 0
        
    console.log(`O Número digitado é par: ${verificpar}`) 

    return (imprimirVerificacao(Number(prompt("Digite o numero 1"))))
   
}

C)  recebe uma mensagem imprima o tamanho dessa mensagem  versão dela em letras maiúsculas.


function imprimirCompMensagem(mensagem) {
    
    let compMensagem = mensagem.toLowerCase()
    let tamMensagem = mensagem.length()
        
    console.log(`Mensagem Recebida: ${compMensagem}, o tamanha da mensagem: ${tamMensagem}`) 

    return (imprimirCompMensagem(prompt("Digite a mensagem")))
   
}
function imprimirOperacao(num1,num2) {

    let soma = num1 + num2
    let multiplicacao = num1 * num2
    let subtracao = num1 - num2
    let divisao = num1 / num2
        
    console.log(`O resultado da soma: ${soma} - resultado Multiplicacao ${multiplicacao} - resultado subtracao ${subtracao} - resultado divisao ${divisao} `) 

    return imprimirOperacao
   
}
console.log(imprimirOperacao(Number(prompt("Digite o numero 1")), Number(prompt("Digite o nuemro 2: "))))*/

