import Header from "../components/Header";

function HomePage() {
    return(
        <>
        <Header 
        actualPage = {"home-page"}/>
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