import { useState, useEffect } from "react";
import axios from "axios";

 function PokeCard(props) {
  const [infoPokemon, setInfoPokemon]= useState({});

  useEffect(()=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonSelecionado}`)
    .then((res)=>{
      setInfoPokemon(res.data);
    })
    .catch((err)=>{
      console.error("Erro ao Buscar Informação do Pokemon");
    });
  },[props.pokemonSelecionado]);
  console.log(infoPokemon);

  return(
    <figure>
      <strong>{infoPokemon.name && infoPokemon.name.toUpperCase()}</strong>
      {infoPokemon.weight && <p>peso: {infoPokemon.weight} lbs</p>}
      {infoPokemon.types && <p>Tipo: {infoPokemon.types[0].type.name}</p>}
      {infoPokemon.sprites && (
        <img src={infoPokemon.sprites.front_default} alt={infoPokemon.name}/>
        )}
    </figure>
  );

}
export default PokeCard;