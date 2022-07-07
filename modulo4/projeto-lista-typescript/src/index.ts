//Exercício 1
//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 
//Entrada esperada →  Várias possibilidades
// Saída esperada → Nenhuma



function verificarParametro(valor: string | number | [] | {}) {
    return typeof valor
}
console.log(verificarParametro(1))

//Exercício 2
//Crie um função que receba uma string com o nome e outra string com uma data de nascimento 
//(ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no 
//seguinte formato: 

//- Formato esperado de saída → “Olá, me chamo {NOME}, nasci no dia {DIA}, no mês de {MÊS}
//e ano de {ANO}.”
//- Entrada esperada → string, string
//- Saída esperada → string

function nomeDataNascimento(nome: string, dataNascimento: string): string {
    let dataNascimentoResultado = dataNascimento.split("/")
    return (`Olá, me chamo ${nome}, nasci no dia ${dataNascimentoResultado[0]}, no mês de ${dataNascimentoResultado[1]}
    e ano de ${dataNascimentoResultado[2]}.`)
}
console.log(nomeDataNascimento("Elizanea", "21/09/1978"))

//Exercício 3

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}


type Filmes = {
    nomeDoFilme: string,
    anoDeLancamento: number,
    generoDoFilme: GENERO,
    pontuacaoEmSite?: number


}
const filme: Filmes = {
    nomeDoFilme: "Duna",
    anoDeLancamento: 2021,
    generoDoFilme: GENERO.ACAO,
    pontuacaoEmSite: 74
}

function imprimeFilmes(filme: Filmes, pontuacaoEmSite?: number) {
    if (typeof pontuacaoEmSite === "number") {
        return pontuacaoEmSite
    }
    console.log(filme)
}
imprimeFilmes(filme)

//Exercício 4

enum SETORES {

    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",

}

type PessoasColaboradoras = {
    nome: string,
    salario: number,
    setor: SETORES,
    presencial: boolean

}[]

const pessoas: PessoasColaboradoras = [

    {
        nome: "Marcos",
        salario: 2500,
        setor: SETORES.MARKETING,
        presencial: true
    },
    {
        nome: "Maria",
        salario: 1500,
        setor: SETORES.VENDAS,
        presencial: false
    },
    {
        nome: "Salete",
        salario: 2200,
        setor: SETORES.FINANCEIRO,
        presencial: true
    },
    {
        nome: "João",
        salario: 2800,
        setor: SETORES.MARKETING,
        presencial: false
    },
    {
        nome: "Josué",
        salario: 5500,
        setor: SETORES.FINANCEIRO,
        presencial: true
    },
    {
        nome: "Natalia",
        salario: 4700,
        setor: SETORES.VENDAS,
        presencial: true
    },
    {
        nome: "Paola",
        salario: 3500,
        setor: SETORES.MARKETING,
        presencial: true
    }

]

function buscarPessoasColaboradoras(pessoas: PessoasColaboradoras) {

    return pessoas.filter(
        (pessoa) => {

            return pessoa.presencial === true && pessoa.setor === "marketing"
        }
    )

} []

console.log(buscarPessoasColaboradoras(pessoas))

//Exercício 5


type Usuarios = {
    nome: string,
    email: string,
    role: string,
}[]

const pessoaUs: Usuarios = [

    { nome: "Rogério", email: "roger@email.com", role: "user" },
    { nome: "Ademir", email: "ademir@email.com", role: "admin" },
    { nome: "Aline", email: "aline@email.com", role: "user" },
    { nome: "Jéssica", email: "jessica@email.com", role: "user" },
    { nome: "Adilson", email: "adilson@email.com", role: "user" },
    { nome: "Carina", email: "carina@email.com", role: "admin" }
]

const buscarRole = pessoaUs.filter((pessoa) => {
    return pessoa.role === 'admin';
  })
const buscarEmail =  buscarRole.map((pessoa)=>{
    return pessoa.email
  })

  console.log(buscarEmail)



  //Exercício 6


  type UsuariosBancos = {
    cliente: string,
    saldoTotal: number,
    debitos:number[],
    saldoAtual: number
}[]

const pessoaFisica: UsuariosBancos = [

    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300], saldoAtual: 1000-100-200-300},
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function saldoAtualizar(pessoaFisica: UsuariosBancos) {
    let i = 0
    while (pessoaFisica.length<=i) {
      let saldoAtual = pessoaFisica.saldoTotal - pessoaFisica.debitos
      i++ 
      if (saldoAtual < 0 ) {
        return pessoaFisica       
    }
    
    }
    
}
console.log(saldoAtualizar)
console.log(pessoaFisica.length)