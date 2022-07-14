import {ExtratoContasPagas} from "./extrato"

export type Usuario = {
    id: number,
    nome: string,
    cpf: string,
    aniversario: string,
    saldo: number
    extrato: ExtratoContasPagas
}

export let usuarios: Usuario[] = [
    {
        id: 1,
        nome: "Alecrim Dourado",
        cpf: "89523674125",
        aniversario: "01/05/89",
        saldo: 5000,
        extrato: [{
            valorDaConta: 500,
            descricaoContaPagar: "Impostos",
            dataDePagamento: ""
        }]
    },
    {
        id: 2,
        nome: "Felix Jose",
        cpf: "78912356789",
        aniversario: "10/11/95",
        saldo: 7000,
        extrato: [{
            valorDaConta: 1000,
            descricaoContaPagar: "FGTS",
            dataDePagamento: ""
        }]
    },
    {
        id: 3,
        nome: "Fred Nascimento",
        cpf: "75315986214",
        aniversario: "08/07/98",
        saldo: 8000,
        extrato: [{
            valorDaConta: 1500,
            descricaoContaPagar: "Aluguel",
            dataDePagamento: ""
        }]
    },
    {
        id: 4,
        nome: "Luki dos Santos",
        cpf: "15978942356",
        aniversario: "14/10/2000",
        saldo: 9000,
        extrato: [{
            valorDaConta: 2000,
            descricaoContaPagar: "Energia",
            dataDePagamento: ""
        }]
    },
    {
        id: 5,
        nome: "Sophia Martins",
        cpf: "74136985215",
        aniversario: "21/09/78",
        saldo: 10000,
        extrato: [{
            valorDaConta: 3000,
            descricaoContaPagar: "Pensão",
            dataDePagamento: ""
        }]
    },
] 