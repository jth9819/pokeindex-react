import React, { useEffect, useState } from "react";
import PokemonCardBrowse from "../components/PokemonCardBrowse";
import PokemonCard from "../components/PokemonCard";
import "../styles/pages/Browse.css";
import { browseGetPokemon } from "../api/PokemonApi";


const Browse = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=18"
  );

  // Retrieve pokemon info and store
  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const createPokemonObject = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemon((currentList) => [...currentList, data]);
        allPokemon.sort((a, b) => a.id - b.id);
      });
    };
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="home-header text-center">
        {/* Heading */}
        <h1 className="display-3">
          <strong>Browse</strong>
        </h1>
        {/* Subheading */}
        <small>Browse for all Pokémon in the PokéAPI's database!</small>
      </div>
      <div className="browse-container">
        {/* List to display pokemon */}
        <div className="list-container">
          {allPokemon.map((pokemonStats, index) => (
            <PokemonCard
              // key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              types={pokemonStats.types}
            />
          ))}
        </div>
        {/* Button to load more Pokemon */}
        <button id="load-more-button" onClick={() => getAllPokemon()}>
          Load more
        </button>
      </div>
    </>
  );
};

export default Browse;