Labebank - Sistema Banc�rio
Sistema banc�rio simplificado, gerenciamento de contas de usu�rios no banco, com funcionalidades esperadas do sistema



GET
teste
http://localhost:3003/teste
Verifica��o se ApI esta funcionando

GET
Pegar saldo
http://localhost:3003/users/:id


Rota de requisi��o: �/users/:id�

Entradas ? id do usu�rio selecionado.

Valida��o de Input ? nenhuma

Regras de Neg�cio ? id deve existir na lista de contas cadastradas

Sa�das poss�veis:

Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situa��o.
Para sucesso, deve retornar o status de exibi��o e o saldo do usu�rio selecionado.
EndFragment

Path Variables
id
2
PUT
Adicionar Saldo
http://localhost:3003/users/:id


Rota de requisi��o: �/users/:id�

Entradas ? id do usu�rio selecionado e novo saldo a ser adicionado.

Valida��o de Input ? Aumento do saldo deve ser do tipo number e maior que 0

Regras de Neg�cio ? id deve existir na lista de contas cadastradas

Sa�das poss�veis:

Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situa��o.
Para sucesso, deve retornar o status de adi��o, uma mensagem de sucesso e os dados do usu�rio selecionado e atualizado.


Path Variables
id
2
Bodyraw (json)
json
{
  "saldo": 1000
}
PUT
Pagar conta
http://localhost:3003/users/:id/pay


Rota de requisi��o: �/users/:id�

Entradas ? id do usu�rio selecionado e novo saldo a ser adicionado.

Valida��o de Input ? Aumento do saldo deve ser do tipo number e maior que 0

Regras de Neg�cio ? id deve existir na lista de contas cadastradas

Sa�das poss�veis:

Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situa��o.
Para sucesso, deve retornar o status de adi��o, uma mensagem de sucesso e os dados do usu�rio selecionado e atualizado.
Path Variables
id
2
Bodyraw (json)
json
{
  "valorDaConta": 1000,
  "descricaoContaPagar": "Imposto"
}
POST
Criar conta
http://localhost:3003/users


Entradas ? Nome do usu�rio, CPF e data de nascimento.

Valida��o de Input:

nome, CPF e data de nascimento devem existir.
Todas as entradas devem ser do tipo string.
Regras de Neg�cio:

CPF � �nico para cada usu�rio.
O usu�rio deve ter idade maior ou igual a 18 anos (n�o se preocupe quanto a varia��es no dia e m�s).
O nome do usu�rio deve ter ao menos 3 caracteres.
a id � gerada automaticamente
a lista de extrato deve iniciar vazia
o saldo deve iniciar com o valor 0
Sa�das poss�veis:

Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situa��o.
Para sucesso, deve retornar o status de cria��o, mensagem de sucesso e a lista de usu�rios atualizada.


Bodyraw (json)
json
{
  "nome": "Aderval",
  "cpf": "11144488896",
  "aniversario": "10/11/95"
}