import React from "react";
import axios from 'axios';
import styled from "styled-components";

const CardUsuario = styled.div`
     border: 1px solid black;
     padding: 10px;
     margin: 10px;
     width: 300px;
     display: flex;
     justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component {

  state={
    usuarios: []
  }
  
componentDidMount(){
   this.pegarUsuarios()
}

pegarUsuarios = () => {

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

   axios.get(url, {
     headers:{
       Authorization: "elizanea-campelo-aragon"
     }
   })
   .then((res) =>{
     this.setState({usuarios: res.data})
   })
   .catch((err) => {
     alert("Lista não visualizada")
   })

}

deletarUsuarios=(id) =>{
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  axios.delete(url,{
    headers:{
      Authorization: "elizanea-campelo-aragon"
    } 
  })
  .then((res) =>{
    alert("Usuario(a) Deletado(a) com Sucesso!!!")
    this.pegarUsuarios()

  })
  .catch((err) =>{
    alert("Usuario(a) não deletado!!!")

  })

}


    render() {

      const listaUsuarios = this.state.usuarios.map((user) =>{
            return <CardUsuario key={user.id}>
              {user.name}
              <button onClick={() => this.deletarUsuarios(user.id)}>X</button>
              </CardUsuario>
      })
      return (
      <div>
          <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
        <h2>Lista Usuario</h2>
        {listaUsuarios}
      </div>
      )
    }
  
    
  }