import React from "react";
import axios from "axios";




export default class TelaCadastro extends React.Component {
    state = {
    nome: "",
    email: ""
   }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "elizanea-campelo-aragon"
            }

        })
        .then((res) =>{
            alert("Usuario(a) cadastrado(a) com Sucesso ")
            this.setState({nome:"", email:""})
        })
        .catch((err) => {
            alert(err.response.data)
            
        })

    }

    render() {
      return (
      <div>
          <button onClick={this.props.irParaLista}>ir para Lista de Usuário</button>
       <h2>Cadastro de Usuario</h2> 
       <input 
           placeholder={"Nome"}
           value={this.state.nome}
           onChange={this.handleNome}/>
       <input 
           placeholder={"E-Mail"}
           value={this.state.email}
           onChange={this.handleEmail}
       />
       <button onClick={this.fazerCadastro}>Cadastrar</button>
      </div>
      )
    }
  
    
  }