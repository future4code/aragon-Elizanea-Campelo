<<<<<<< HEAD
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { goToHomePage, goToAdminPage } from "../routes/coordinator";

 function Header() {

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate();
 
    const handleInputValue =(e) =>{
        switch (e.target.name) {
            case "email":
                return setEmail(e.target.value);
            case "password":
                return setPassword(e.target.value)    
=======
import {useNavigate} from "react-router-dom";
import { goToHomePage, goToAdminPage } from "../routes/coordinator";

 function Header(props) {

    const navigate = useNavigate();

    const renderHeader= () => {
        switch (props.actualPage) {
            case "home-page":
                return (<button onClick={()=> goToAdminPage(navigate)}>ENTRAR</button>);
            case "admin-page":
                return (<button onClick={()=>goToHomePage(navigate) }>LOGIN</button>)    
>>>>>>> 0646cb2141675d6ef12f9e2e02de8f7cac9d1afa
                        
            default:
                return;
                
        };
    };
<<<<<<< HEAD
    const login = (e) => {
        e.preventDefault();
        const body = {
          email: email,
          password: password
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login",
            body
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            goToAdminPage(navigate);
          })
          .catch((err) => console.log(err.response));
      };

      const logout = () => {
        localStorage.removeItem("token");
        goToHomePage(navigate);
        console.log("foi");
      };

    const renderHeader= localStorage.getItem("token") ?
    (<button onClick={logout}>SAIR</button>):
    (<form onSubmit={login}>
        <label htmlFor={"email"}>EMAIL</label>
        <input
          id={"email"}
          name={"email"}
          value={email}
          onChange = {handleInputValue}></input>
          <br/>
        <label htmlFor={"password"}>SENHA</label>
        <input
          id={"password"}
          type={"password"}
          name={"password"}
          value={password}
          onChange = {handleInputValue}></input>
          <br/>
        <button type={"submit"}>ENTRAR</button>
    </form>)
    return (<header>
        <h1> LABEX </h1>
        {renderHeader}
=======
    return (<header>
        <h1> LABEX </h1>
        {renderHeader()}
>>>>>>> 0646cb2141675d6ef12f9e2e02de8f7cac9d1afa
        </header>);
};
export default Header;