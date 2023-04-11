import React, { useState, useEffect } from "react";
import { searchGetPokemon } from "../api/PokemonApi"
import SiteLoadingIcon from "./SiteLoadingIcon";
import PokemonCard from "./PokemonCard";
import "../styles/components/PokemonCardSearch.css";

const PokemonCardSearch = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [errorHit, setErrorHit] = useState(false);
  const [spinningIcon, setSpinningIcon] = useState(null);

  const getData = async () => {
    setSpinningIcon(< SiteLoadingIcon />);
    searchGetPokemon("/" + props.pokemonProp.toLowerCase())
      .then((response) => {
        setSpinningIcon(null);
        setPokemon(response.data);
      }).catch((e) => {
        setErrorHit(true);
        console.log(e);
      });
  };

  useEffect(() => {
    setPokemon(null)
    setErrorHit(false);
    getData()
  }, [props.pokemonProp]);

  if (errorHit) {
    return (<div style={{ textAlign: "center", marginTop: "15px" }}>Cannot find. Try again!</div>);
  } else if (pokemon === null) {
    return spinningIcon;
  } else if (pokemon) {
    let pokemonTypes = null;
    let pokemonObject = {
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      id: pokemon.id,
      types: pokemon.types,
    };

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
    return <div className="search-card-container"><PokemonCard pokemonObject={pokemonObject} pokemonTypes={pokemonTypes} /></div>;
  } else {
    return <div></div>;
  }
};

export default PokemonCardSearch;
