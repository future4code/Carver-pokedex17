import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";
import { useGlobalStates } from "../../global/GlobalState";
import { goToHome } from "../../routes/coodinator";
import { DetailsMain, Header } from "./Styled";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pokemonList, loading } = useGlobalStates();
  const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id));
  const { name } = pokemon || {};
  

  return (
    <>
      <Header>
      <h1>{name.toUpperCase() || "Detalhes Do Pokémon"}</h1>
        <button onClick={() => goToHome(navigate)}>Lista</button>
        
        
      </Header>
      <DetailsMain>
        {loading ? <p>Carregando Pokémon</p> : <PokemonDetails pokemon={pokemon}/> }
      </DetailsMain>
    </>
  );
}
