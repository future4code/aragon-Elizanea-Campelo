import Header from "../components/Header";
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {goToHomePage} from '../routes/coordinator'


function AdminPage() {
    const navigate = useNavigate
    useEffect(()=> {
        if(!localStorage.getItem("token")){
            goToHomePage(navigate);
        };
    },[]);
    return(
        <>
        <Header/>
        <hr/>
        <main>
            <section>
                <h2>Criar nova viagem</h2>
            </section>
            <hr/>
            <section>
                <h2>Lista de Viagens</h2>
                </section>
        </main>
        </>

    );

    
};

export default AdminPage;