// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A


function soma(num1, num2) {
  
  let soma = num1 + num2  
  console.log(soma)
  return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  
  console.log(mensagem)

  return imprimeMensagem
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const largura = Number(prompt("Digite a largura: "))
  const altura = Number(prompt("Digite a altura: "))
  areaRetangulo = largura * altura
  console.log(areaRetangulo)
  return calculaAreaRetangulo


}

// EXERCÍCIO 02
function imprimeIdade() {
let anoAtual = Number(prompt("Digite o ano atual: "))
let anoNascimento = Number(prompt("Digite o ano nascimento: "))
let idade = anoAtual - anoNascimento
console.log(idade)
 return  imprimeIdade
}

// EXERCÍCIO 03
function calculaIMC(peso = Number(prompt("Digite o peso: ")), altura = Number(prompt("Digite a altura: "))) {
  
  let IMC = (peso) / (altura) ** 2
  
  return  calculaIMC

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}