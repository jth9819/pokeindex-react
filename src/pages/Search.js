import "../styles/Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  let examplePokemon = "charizard"; // TODO: Temporary variable
  const url = `https://pokeapi.co/api/v2/pokemon/${examplePokemon}`;
  const [pokemon, setPokemon] = useState(null);

  // Declare object to store the pokemon info
  let pokemonObject = {
    name: null,
    image: null,
    types: [],
  };

  // Call API and get info
  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);

  return (
    <div class="row" id="content-wrap">
      {/* Title */}
      <div className="home-header text-center">
        <h1 className="display-3">
          <strong>PokéIndex Search</strong>
        </h1>
        <small>Enter a Pokemon's Name or National PokeDex Number!</small>
      </div>
      {/* Input group */}
      <div
        class="input-group rounded col-8 col-sm-8 col-md-8 col-lg-8 mx-auto"
        id="input-group"
      >
        {/* Input field */}
        <input
          type="text"
          /* #box */ class="form-control rounded"
          id="search-query"
          placeholder="Search for a Pokemon!"
          aria-label="Search"
        />
        &nbsp;&nbsp;
        {/* Find button */}
        <button
          /* (click)="getSearchedPokemon(box.value); toggleShow()" */ class="input-group-text border-0"
          id="search-btn"
        >
          <i
            class="fa fa-search"
            alt="button"
            value="search"
            aria-hidden="true"
            type="button"
          ></i>
          &nbsp;Find
        </button>
      </div>
    </div>
  );

  ///////////////////////////////////////////////////////////////////////////////////

  //   if (pokemon) {
  //     let pokemonTypes = null;

  //     pokemonObject = {
  //       name: pokemon.name,
  //       image: pokemon.sprites.other.dream_world.front_default,
  //       types: pokemon.types,
  //     };

  //     // Check and store types
  //     if (pokemon.types.length === 1) {
  //       pokemonTypes = pokemonObject.types[0].type.name;
  //     }
  //     if (pokemon.types.length === 2) {
  //       pokemonTypes =
  //         pokemonObject.types[0].type.name +
  //         " / " +
  //         pokemonObject.types[1].type.name;
  //     }

  //     let returnObject = (
  //       <div>
  //         <h1>{pokemonObject.name}</h1>;
  //         <img src={pokemonObject.image} alt="Pokemon" />
  //         <p>{pokemonTypes}</p>
  //       </div>
  //     );
  //   }

  ///////////////////////////////////////////////////////////////////////////////////

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

  ////////////////////////////////////////////////////////////////////////////////////
}

export default Search;
