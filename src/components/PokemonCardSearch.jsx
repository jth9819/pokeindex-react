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
    return (
      <div className="search-card-container">
        <PokemonCard
          id={pokemon.id}
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          types={pokemon.types}
        />
      </div>
    )
  } else {
    return <div></div>;
  }
};

export default PokemonCardSearch;
