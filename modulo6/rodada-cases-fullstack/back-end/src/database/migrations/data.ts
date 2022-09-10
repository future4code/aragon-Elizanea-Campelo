import { IProductDB, IIngredienteDB, IIngredientesProductsDB } from "../../models/Product"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Eliz",
        email: "eliz@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", 
        role: USER_ROLES.ADMIN
    },
    
]

export const products: IProductDB[] = [
    {
      "id": "1",
      "name": "Marguerita",
      "price": 5.00
    },
    {
      "id": "2",
      "name": "Búfala",
      "price": 6.00
    },
    {
      "id": "3",
      "name": "Romana",
      "price": 5.00
    },
    {
      "id": "4",
      "name": "Diavola",
      "price": 7.50
    },
    {
      "id": "4",
      "name": "Pizza BrancaA",
      "price": 5.00
    }
    
  ]

  export const ingredientes: IIngredienteDB[] = [
    {
      id: "101",
      ingrediente: 'mussarela',
    },
    {
      id: "102",
      ingrediente: 'orégano',
    },
    {
      id: "103",
      ingrediente: 'tomate',
    },
    {
      id: "104",
      ingrediente: 'salame picante',
    },
    {
      id: "105",
      ingrediente: 'anchovas',
    },
    {
      id: "106",
      ingrediente: 'óleo',
    },
    {
      id: "107",
      ingrediente: 'mussarela de búfala',
    }
    
  ];

  export const ingredientesProducts: IIngredientesProductsDB[] = [
    {
      id: '201',
      product_id: '1',
      ingrediente_id: '101',
    },
    {
      id: '201',
      product_id: '2',
      ingrediente_id: '102',
    }
    
  ];