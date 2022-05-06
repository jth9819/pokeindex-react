import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonCardSearch(props) {
  const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemonProp}`;
  const [pokemon, setPokemon] = useState(null);

  let pokemonObject = {
    name: null,
    image: null,
    types: [],
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);

  if (pokemon) {
    let pokemonTypes = null;

    pokemonObject = {
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };

    // Check and store types
    if (pokemon.types.length === 1) {
      pokemonTypes = pokemonObject.types[0].type.name;
    }
    if (pokemon.types.length === 2) {
      pokemonTypes =
        pokemonObject.types[0].type.name +
        " / " +
        pokemonObject.types[1].type.name;
    }

    let returnObject = (
      <div>
        <h1>{pokemonObject.name}</h1>;
        <img src={pokemonObject.image} alt="Pokemon" />
        <p>{pokemonTypes}</p>
      </div>
    );

    return <div>{returnObject}</div>;
  } else {
    return <div>Nothing Returned.</div>;
  }
}

export default PokemonCardSearch;
