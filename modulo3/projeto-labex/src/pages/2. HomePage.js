import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToHomePage } from "../routes/coordinator";

function HomePage() {

    const navigate = useNavigate()

    useEffect(()=>{
        if (localStorage.getItem("token")){
            goToHomePage(navigate);
        };
    });
    return(
        <>
        <Header/>
        <main>
            <section>
               <h2>Conheça nossas viagens e faça já sua inscrição!</h2>
            </section>
            <hr/>
            <section>
                <h2>Lista de Viagens</h2>
            </section>
            <hr/>
        </main>

        
        </>
    );
    
};

export default HomePage;