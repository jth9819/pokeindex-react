import "../styles/Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  let examplePokemon = "charizard";
  const url = `https://pokeapi.co/api/v2/pokemon/${examplePokemon}`;
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
    pokemonObject = {
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };

    console.log(pokemonObject.types[0].type.name);

    return (
      <div>
        <h1>{pokemonObject.name}</h1>;
        <img src={pokemonObject.image} alt="Pokemon" />
        <p>{pokemonObject.types[0].type.name}</p>
      </div>
    );
  }

  //   console.log(pokemonObject.types[0].type.name);

  // pokemonObject.image = (
  //   <img src={pokemon.sprites.other.dream_world.front_default} />
  // );

  // content = (
  //   <div>
  //     <h1>{pokemon.name}</h1>
  //   </div>
  // );

  // content = {
  //   name: product.name,
  // image: product.sprites.other.dream_world.front_default

  return (
    <div>
      <h1>IF STATEMENT DIDN'T RUN</h1>
    </div>
  );

  // <div>{content}</div>

  // return (
  //     <div class="row" id="content-wrap">
  //         {/* Title */}
  //         <div className="home-header text-center">
  //             <h1 className="display-3">
  //                 <strong>PokéIndex Search</strong>
  //             </h1>
  //             <small>Enter a Pokemon's Name or National PokeDex Number!</small>
  //         </div>
  //         {/* Input group */}
  //         <div class="input-group rounded col-8 col-sm-8 col-md-8 col-lg-8 mx-auto" id="input-group">
  //             {/* Input field */}
  //             <input type="text" /* #box */ class="form-control rounded" id="search-query" placeholder="Search for a Pokemon!" aria-label="Search" />&nbsp;&nbsp;
  //             {/* Find button */}
  //             <button /* (click)="getSearchedPokemon(box.value); toggleShow()" */ class="input-group-text border-0" id="search-btn">
  //                 <i class="fa fa-search" alt="button" value="search" aria-hidden="true" type="button"></i>&nbsp;Find
  //         </button>
  //         </div>
  //     </div>
  // );
}

export default Search;
