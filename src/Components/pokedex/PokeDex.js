import React from "react";
import { v4 as uuid } from "uuid";
import PokemonSelect from "../pokemon-select/PokemonSelect";
import PokemonCard from "../pokemon-card/PokemonCard";
import "./PokeDex.css";
import { useAxios } from "../../hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon, clearPokemon] = useAxios(`https://pokeapi.co/api/v2/pokemon/`)

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={setPokemon} />
        <button onClick={clearPokemon}>Clear All Cards</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={uuid()}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
