import React from "react";
import TelaListaUsuarios from "./components/TelaListaUsuarios";
import TelaCadastro from "./components/TelaCadastro";
//import styled from "styled-components";//
//import axios from "axios";//

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () =>{
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return<div>Erro: Pagina não encontrada!</div>

    }
  }
  irParaCadastro = () =>{
    this.setState({telaAtual: "cadastro"})
  }
  irParaLista = () =>{
    this.setState({telaAtual: "lista"})
  }
  render() {
    return (
    <div>      
      {this.escolheTela()}
    </div>
    )
  }
}

