import React from "react";
import { useNavigate } from "react-router";
import PokemonList from "../../components/PokemonList";
import { gotToPokedex } from "../../routes/coodinator";
import { Main, Header } from "./Styled";
import Pagination from '@mui/material/Pagination';
import { useGlobalStates, useGlobalSetters } from '../../global/GlobalState'

export default function Home() {
  const navigate = useNavigate();
  const page = useGlobalStates();
  const setPage = useGlobalSetters();

  return (
    <>
      <Header>
        <button onClick={() => gotToPokedex(navigate)}>Pokédex</button>
        <h1>Lista dos Pokémons</h1>
      </Header>
      <Pagination count={10} variant="outlined" shape="rounded" />
      <Main>
        <PokemonList />
      </Main>
    </>
  );
}
