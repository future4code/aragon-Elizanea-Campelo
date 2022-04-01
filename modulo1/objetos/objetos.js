/*
Exercicios Objetos - 28/03/2022
Elizanea Campelo
Exercícios de interpretação de código
1 a.)
"Matheus Nachtergaele"
"Denise Fraga"
canal: "Globo", horario: "14h"

2 a)
nome:Juca - Idade 3 Raça SRD
nome:Juba - Idade 3 Raça SRD
nome:Jubo - Idade 3 Raça SRD
B) utiliza as propriedades do objeto master

3)
a) O que vai ser impresso no console?
false
indefinido
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
no backender já estava declarado que era false, ele buscou essa informação, e indefinido porque altura 
não foi incluida dentro das propriedades.

Exercícios de escrita de código
1)

    const meusDados = {
        nome: "Eliz",
        apelido: ["Nem", "Neinha", "Nega"]
        
    }
    
    function imprimeMeusDados(objetomeusDados) {
        const novaDados = {
            ...objetomeusDados,            
        }
        const frase = `Meu nome ${novaDados.nome} mas pode me chamar ${novaDados.apelido[0]}, ${novaDados.apelido[1]} e ${novaDados.apelido[2]}.`
        
        console.log(frase)
    }
    
    imprimeMeusDados(meusDados)
    
    
    b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da
    propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função
    feita no item anterior passando como argumento o novo objeto
    
    2A)  Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.*/
    
    const pessoa = {
        nome: "Eliz",
        idade: 43,
        profissao: "Desenvolvedora"
    }
    const pessoa1 = {
        nome: "Tommy",
        idade: 64,
        profissao: "Aposentado"
    }

    function pessoa(objetoPessoa) {
        const novaPessoa = {
            ...objetoPessoa,
            objeto.novaPropriedade=objetoPessoa.nome.length,
            objetoPessoa.profissao.length
            
        }
     function pessoa1(objetoPessoa1){
        const novaPessoa = {
        ...objetoPessoa1,
            objetoPessoa1.nome.length,
            objetoPessoa1.profissao.length
        }
        const frase = `Meu nome ${novaDados.nome} mas pode me chamar ${novaDados.apelido[0]}, ${novaDados.apelido[1]} e ${novaDados.apelido[2]}.`
        
        console.log(frase)
    }