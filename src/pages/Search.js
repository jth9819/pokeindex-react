import React, { useState } from "react";
import PokemonCardSearch from "../components/PokemonCardSearch";

import "../styles/pages/Search.css";

const Search = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div className="row" id="content-wrap">
      {/* Heading */}
      <div className="home-header text-center">
        <h1 className="display-3">
          <strong>PokéIndex Search</strong>
        </h1>
        {/* Subheading */}
        <small>Enter a Pokemon's Name or National PokeDex Number!</small>
      </div>
      {/* Input group */}
      <div
        className="input-group rounded col-8 col-sm-8 col-md-8 col-lg-8 mx-auto"
        id="input-group"
      >
        {/* Input field */}
        <input
          type="text"
          onChange={getData}
          className="form-control rounded"
          id="search-query"
          placeholder="Search for a Pokemon!"
          aria-label="Search"
        />
        &nbsp;&nbsp;
        {/* Find button */}
        <button
          onClick={() => setPrint(true)}
          className="input-group-text border-0"
          id="search-btn"
        >
          Find
        </button>
      </div>
      {print ? <PokemonCardSearch pokemonProp={data} /> : null}
    </div>
  );
};

export default Search;
