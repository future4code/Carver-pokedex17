import React from "react";
import {
  Images,
  SectionStats,
  ArticleTypes,
  ArticleMoves,
  SectionInfo
} from "./Styled";


export default function PokemonDetails(props) {
  if (!props.pokemon)
    return <p>Pokémon Não Encontrado</p>;

  const { name, sprites, stats, types, moves } = props.pokemon;

  return (
    <>
      <Images>
        <img alt={`${name} frente`} src={sprites.front_default} />
        <img alt={`${name} trás`} src={sprites.back_default} />
      </Images> 

      <SectionStats>
        <h1>Estatísticas</h1>
        {stats.map((stat) => (
          <article key={stat.stat.name}>
            <h4>{stat.stat.name.toUpperCase()}</h4>
            <p>{stat.base_stat}</p>
          </article>
        ))}
      </SectionStats>
      <SectionInfo>
        <h1>Tipos</h1>
        <ArticleTypes>
          {types.map((type) => <p key={type.slot}>{type.type.name}</p>)}
        </ArticleTypes>
        <h1>Movimentos</h1>
        <ArticleMoves>
          {moves.map(({ move }) => <p key={move.url}>{move.name}</p>)}
        </ArticleMoves>
      </SectionInfo>

    </>
  );
}
