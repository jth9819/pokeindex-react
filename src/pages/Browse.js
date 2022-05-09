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

    console.log(data);
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
        <h1>Hello</h1>

        <div className="pokemon-container">
          <div className="all-container"></div>
          <button className="load-more">Load more</button>
        </div>
      </div>
    </>
  );
};

export default Browse;
