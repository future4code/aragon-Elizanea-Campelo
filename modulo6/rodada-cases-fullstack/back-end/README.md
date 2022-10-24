#Pizzaria Back-end 

#### Description

Aplicativo desenvolvido na web que permita aos usuários pedir pizza.

O cliente fará interface com a API integrada na parte de back-end do desafio.

Em primeiro lugar, é apresentado a lista de pizzas com ingredientes e preços. Os dados serão carregados. 

Quando o usuário escolhe algo da lista, o resumo do pedido será atualizado dinamicamente.

#### Instruções
 Para rodar o sistema é necessásio:

#### Criar o arquivo `.env` e configurar com as informações de seu banco de dados:
```
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
```

#### Instalar as dependências:

-   `npm install`:
    Instala todas as dependências listadas no `package.json`.

#### Popular a tabela:

-   `npm run migrations`
    Popula a tabela com dados de usuários.
    _Esse script deve ser executado apenas uma única vez, ou quando você quiser reiniciar a popilação das tabelas iniciais_

#### Executar o projeto:

-   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

#### Stack utilizada

- NodeJS
- TypeScript
- SQL
- Knex
- Express
- Cors

#### Programas utilizados

- VSCode
- MySQL Workbench
