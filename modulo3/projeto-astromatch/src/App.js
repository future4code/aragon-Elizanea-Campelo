import "./styles.css";
import Header from "./Components/Header";

import { useState } from "react";

export default function App() {
  const [pagina, setPagina] = useState("profiles");

  const renderActualPage = () => {
    switch (pagina) {
      case "profiles":
       //return <ProfilePage/>
      case "matches":
      //return<MatchesPage>

      default:
        //return <ProfilesPage>
        break;
    }
  };
  const paginaPerfil = () => {
    setPagina("profiles");
  };
  const paginaMatches = () => {
    setPagina("matches");
  };
  return (
    <div>
      <Header
        page={pagina}
        goToProfilesPage={paginaPerfil}
        goToMatchesPage={paginaMatches}
      />
      <br />
      <hr />
      <main>{renderActualPage}</main>
    </div>
  );
}
