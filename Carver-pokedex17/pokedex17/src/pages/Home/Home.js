import React from "react";
import { useNavigate } from "react-router";
import PokemonList from "../../components/PokemonList";
import { gotToPokedex } from "../../routes/coodinator";
import { Main, Header } from "./Styled";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <button onClick={() => gotToPokedex(navigate)}>Pokedex</button>
      </Header>
      <Main>
        <PokemonList />
      </Main>
    </>
  );
}
