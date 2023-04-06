import React, { useState } from "react";
import PokemonCardSearch from "../components/PokemonCardSearch";
import "../styles/pages/Search.css";

const Search = () => {
  const [value, setValue] = useState("");
  const [print, setPrint] = useState(false);
  const [result, setResult] = useState("");

  function handleChange(event) {
    console.log("HandleChange hit.");
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    console.log("HandleSubmit hit.");
    setResult(value)
    setPrint(true)
  }

  return (
    <div className="row" id="content-wrap">
      {/* Header */}
      <div className="home-header text-center">
        {/* Heading */}
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
          onChange={handleChange}
          className="form-control rounded"
          id="search-query"
          placeholder="Search for a Pokemon!"
          aria-label="Search"
        />
        &nbsp;&nbsp;
        {/* Find button */}
        <button
          onClick={handleSubmit}
          className="input-group-text border-0"
          id="search-btn"
        >
          Find
        </button>
      </div>
      {/* If print is true, display card */}
      {print ? <PokemonCardSearch pokemonProp={result} /> : null}
    </div>
  );
};

export default Search;
