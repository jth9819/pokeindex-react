import React, { useState, useEffect } from "react";
import LoadingIcons from "react-loading-icons";
import Card from "react-bootstrap/Card";
import axios from "axios";

import "../styles/components/PokemonCardSearch.css";

const PokemonCardSearch = (props) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemonProp}`;
  const [pokemon, setPokemon] = useState(null);
  const [errorHit, setErrorHit] = useState(false);
  const [spinningIcon, setSpinningIcon] = useState("");

  let pokemonObject = {
    name: null,
    image: null,
    types: [],
  };

  const getData = async () => {
    setSpinningIcon(<LoadingIcons.Oval stroke="#1a1a1a" />);
    await axios
      .get(url)
      .then((response) => {
        setSpinningIcon("");
        setPokemon(response.data);
      })
      .catch((e) => {
        setErrorHit(true);
      });
  };

  useEffect(() => {
    setPokemon(null)
    setErrorHit(false);
    getData()
  }, [props.pokemonProp]);

  if(errorHit === true) {
    return "Cannot find. Try again!"
  } 
  
  else if (pokemon === null) {
    return spinningIcon;
  } 
  
  else if (pokemon) {
    let pokemonTypes = null;

    pokemonObject = {
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };

    // Check number of types and store + fix casing
    if (pokemon.types.length === 1) {
      pokemonTypes =
        pokemonObject.types[0].type.name.charAt(0).toUpperCase() +
        pokemonObject.types[0].type.name.slice(1);
    }
    if (pokemon.types.length === 2) {
      pokemonTypes =
        pokemonObject.types[0].type.name.charAt(0).toUpperCase() +
        pokemonObject.types[0].type.name.slice(1) +
        " / " +
        pokemonObject.types[1].type.name.charAt(0).toUpperCase() +
        pokemonObject.types[1].type.name.slice(1);
    }

    let returnObject = (
      <Card className="search-card">
        {/* Displays pokemon name */}
        <h2 id="pokemon-name">
          {pokemonObject.name.charAt(0).toUpperCase() +
            pokemonObject.name.slice(1)}
        </h2>{" "}
        {/* Displays pokemon image */}
        <img id="pokemon-image" src={pokemonObject.image} alt="Pokemon" />{" "}
        {/* Displays pokemon types */}
        <p id="pokemon-types">
          <strong>Type: </strong>
          {pokemonTypes}
        </p>{" "}
      </Card>
    );
    return <div>{returnObject}</div>;
  } else {
    return <div></div>;
  }
};

export default PokemonCardSearch;
