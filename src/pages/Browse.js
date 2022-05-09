import "../styles/Browse.css";
import PokemonCardBrowse from "../components/PokemonCardBrowse";
import { useEffect, useState } from "react";
import axios from "axios";

const Browse = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <div className="home-header text-center">
        {/* Heading */}
        <h1 className="display-3">
          <strong>PokéIndex Browse</strong>
        </h1>
        {/* Subheading */}
        <small>Browse for all Pokémon in PokéAPI's database!</small>
      </div>
      {/* List */}
      <div className="app-container">
        <h1>Pokemon Evolution</h1>

        <div className="pokemon-container">
          <div className="all-containers">
            {allPokemons.map((pokemon) => (
              <li>{pokemon.name}</li>
            ))}
          </div>
          <button className="load-more">Load more</button>
        </div>
      </div>
    </>
  );
};

export default Browse;
