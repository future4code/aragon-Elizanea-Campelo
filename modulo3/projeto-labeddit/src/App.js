
import AppStyle from "./AppStyle";

function App() {
  return (
    <AppStyle>
    <>
       <main>
       <h2>LabEddit</h2>
      
      <hr />
      <section>
        <h2>Login</h2>
        <form>
          <label htmlFor={"email"}>Email: </label>
          <input
            id={"email"}
            type={"email"}
            name={"email"}
           
          ></input>
          <br />
          <label htmlFor={"password"}>Senha: </label>
          <input
            id={"password"}
            type={"password"}
            name={"password"}
            
          ></input>
          <br />
          <button className="botao" type={"submit"}>Entrar</button>
        </form>
      </section>
      <hr />
      <section>
        <h3>Não tem cadastro? Clique no botão a seguir para se cadastrar: </h3>
       
        <button className="botao">
          Ir para cadastro
        </button>
      </section>
    </main>
    </>
    </AppStyle>
  );
}

export default App;
