import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./Components/PokeCard";
import "./styles.css";

 function App(props) {
  const [listPokemon,setListPokenom] = useState([]);
  const [pokemonSelecionado,setPokemonSelecionado] = useState("");
  
  useEffect(()=>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((res)=>{
      setListPokenom(res.data.results);
    })
    .catch((err)=>{
       console.error("Erro ao buscar Pokemon");
    });
    },[]);
    console.log(listPokemon)

  const selecionaPokemon = (e) =>{
    setPokemonSelecionado(e.target.value);
  };

  const pokemon = true && < PokeCard pokemonSelecionado= {pokemonSelecionado} />;
  
  
  return (
    <main>
      <header>
      <h1>POKEMON</h1>
      </header>
      <nav>
        <label htmlFor={"pokemon selecionado"}>Selecione um Pokemon</label>
        <select value={pokemonSelecionado} onChange={selecionaPokemon}>
          <option value = {""}>Nenhum</option>
          {listPokemon.map((pokemon)=>{
            return(
              <option valeu={pokemon.name} key={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
     
      </nav>
      <visor>{pokemon}</visor>
    </main>
  );
}
export default App;
