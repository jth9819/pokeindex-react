import React, { useState, useEffect } from "react";
import LoadingIcons from "react-loading-icons";
import axios from "axios";

import "../styles/components/PokemonCardSearch.css";
import SiteLoadingIcon from "./SiteLoadingIcon";
import PokemonCard from "./PokemonCard";

const PokemonCardSearch = (props) => {
  const lowercasePokemonProp = props.pokemonProp.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${lowercasePokemonProp}`;
  const [pokemon, setPokemon] = useState(null);
  const [errorHit, setErrorHit] = useState(false);
  const [spinningIcon, setSpinningIcon] = useState("");

  let pokemonObject = {
    name: null,
    image: null,
    types: [],
  };

  const getData = async () => {
    setSpinningIcon(< SiteLoadingIcon />);
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
    return (
      <div style={{textAlign: "center", marginTop: "15px"}}>Cannot find. Try again!</div>
    )
  } else if (pokemon === null) {
    return spinningIcon;
  } 
  
  else if (pokemon) {
    let pokemonTypes = null;
    pokemonObject = {
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      id: pokemon.id,
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

    let pokemonCardToDisplay = (
      <PokemonCard pokemonObject = {pokemonObject} pokemonTypes = {pokemonTypes} />
    );
    return <div>{pokemonCardToDisplay}</div>;
  } else {
    return <div></div>;
  }
};

export default PokemonCardSearch;
