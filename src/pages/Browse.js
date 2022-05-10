import React, { useEffect, useState } from "react";
import PokemonCardBrowse from "../components/PokemonCardBrowse";
import "../styles/pages/Browse.css";

const Browse = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=14"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="home-header text-center">
        {/* Heading */}
        <h1 className="display-3">
          <strong>PokéIndex Browse</strong>
        </h1>
        {/* Subheading */}
        <small>Browse for all Pokémon in the PokéAPI's database!</small>
      </div>
      {/* List */}
      <div className="main-browse-container">
        <div className="list-container">
          {allPokemons.map((pokemonStats, index) => (
            <PokemonCardBrowse
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
          ))}
        </div>
        <button id="load-more-button" onClick={() => getAllPokemons()}>
          Load more
        </button>
      </div>
    </>
  );
};

export default Browse;
