import React from "react";
import PokemonCardSearch from "../components/PokemonCardSearch";

import "../styles/Search.css";

function Search() {
  return (
    <div class="row" id="content-wrap">
      {/* Title */}
      <div className="home-header text-center">
        <h1 className="display-3">
          <strong>PokéIndex Search</strong>
        </h1>
        {/* Subheading */}
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
          class="form-control rounded"
          id="search-query"
          placeholder="Search for a Pokemon!"
          aria-label="Search"
        />
        &nbsp;&nbsp;
        {/* Find button */}
        <button class="input-group-text border-0" id="search-btn">
          <i
            class="fa fa-search"
            alt="button"
            value="search"
            aria-hidden="true"
            type="submit"
          ></i>
          &nbsp;Find
        </button>
      </div>

      <PokemonCardSearch pokemonProp="squirtle" />
    </div>
  );
}

export default Search;
