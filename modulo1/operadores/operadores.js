/*Elizanea Campelo*/


/*a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também; */

let valorF= 77
valorK = (valorF-32)*(5/9)+273.15
console.log(valorK,"°")

/*b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também;*/


let valorC=80
valorF = (valorC)*(9/5)+32
console.log(valorF,"°")

/*c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também;*/

let valorC = 30
valorF = (valorC)*(9/5)+32
valorK = (valorF-32)*(5/9)+273.15
console.log("Valor °F:", valorF)
console.log("Valor em °K", valorK)

/*d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter;*/

let valorC = Number(prompt("Digite o valor para converter °C em °F e ºK "))
valorF = (valorC)*(9/5)+32
valorK = (valorF-32)*(5/9)+273.15
console.log("Valor °F:", valorF)
console.log("Valor em °K", valorK)

/*a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;*/

valorQuilowatt_hora= 0.05
quilowatt_Hora= 200
valordoConsumo = (valorQuilowatt_hora*quilowatt_Hora)
console.log("O valor a ser pago pelo consumo da sua residencia: ", valordoConsumo)

/*b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto;
*/

let valorQuilowatt_hora= 0.05
let quilowatt_Hora= 200
valordoConsumo = (valorQuilowatt_hora*quilowatt_Hora)
valor_AplicadoDesconto= valordoConsumo - (valordoConsumo*0.15)

console.log("O valor a ser pago pelo consumo da sua residencia: ", valor_AplicadoDesconto)

/*a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
`20lb equivalem a X kg`*/

let valorLb = 20
valorKg = valorLb/2.2046
console.log("20 lb equivalem a", valorKg, "kg")

/*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
10.5oz equivalem a X kg*/


let valorOnca = 10.5
valorKg = valorOnca*0.028349523125
console.log("10.5oz equivalem a", valorKg, "kg")

/*c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
100mi equivalem a X m*/

let valorMi=100
valorM = valorMi/0.00062137
console.log("100mi equivalem a", valorM, "m")

/*d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    50ft equivalem a X m*/

let valorFt=50
valorM = valorFt/3.2808
console.log("50ft equivalem a", valorM, "m")

/*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
   103.56gal equivalem a X l*/

let valoGal=103.56
valorL = valoGal/0.26417
console.log("103.56gal equivalem a", valorL, "l")

/*f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l`*/

let valoXic= 450
valorL = valoXic*0.24
console.log("450 xic equivalem a", valorL, "l")

/*g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor 
   da unidade original antes de converter; */

let valoXic= Number(prompt("Digite a quantidade da Xicara (xic) para converte em litro(l): "))
valorL = valoXic*0.24
console.log("450 xic equivalem a", valorL, "l")