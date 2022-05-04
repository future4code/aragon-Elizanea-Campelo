import './App.css';
import React from "react";
//import styled from "styled-components";//
import axios from "axios";


export default class App extends React.Component {
  state = {
    users: {},
    userEdition: "editButton",
    inputName: "",
    inputemail: ""
  };

  onChangeInput = (event) => {
    this.setState({ inputName: event.target.value });
  };

  componentDidMount() {
    this.getAllUsers();
    
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "eliz-campelo-aragon"
          }
        }
      )
      .then((response) => {
        this.setState({ AllUsers: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  changeUserEditionFiel = () => {
    if (this.state.userEdition === "editButton") {
      this.setState({ userEdition: "userEditForm" });
    } else {
      this.setState({ userEdition: "editButton" });
    }
  };

  createAllUsers = () => {
    const body = {
      name: this.state.inputName
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "eliz-campelo-aragon"
          }
        }
      )
      .then((response) => {
        this.getPlaylists();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <main>
        
        <section>
          <label>
            Nome do Usuario
            <input value={this.state.inputName} onChange={this.onChangeInput} />
          </label>

          <button onClick={this.createPlaylist}>Criar Nome</button>
        </section>

        <section>
          {this.state.playlists.map((allUsers) => {
            return <p key={AllUsers.id}>{AllUsers.name}</p>;
          })}
        </section>
      </main>
    );
  }
}

