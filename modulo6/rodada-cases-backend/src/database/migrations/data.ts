import { IProductDB, ITagDB } from "../../models/Produto"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }

    
]
export const products: IProductDB[] = [

        {
            id : "8360" ,
            name : " VESTIDO FEMININO CANELADO " ,            
            
          },
          
          {
            id : "8311" ,
            name : " VESTIDO SLIPDRESS CETIM " ,
            
          },

          {
            id : "8310" ,
            name : " VESTIDO CURTO PONTO ROMA MANGA " ,
            
          },

          {
            id : "8309" ,
            name : " VESTIDO MOLETOM COM CAPUZ " ,
            
          }

          
]
export const tags: ITagDB[] = [
    {
        id: "360",
        name: " metal " 
    },
    {
        id: "311",
        name:  " casual " 
    },
    {
        id:"310",
        name: " descolado "
    },

    {
        id:"309",
        name:" balada " 

    }

]

