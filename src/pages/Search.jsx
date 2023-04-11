import React, { useState } from "react";
import PokemonCardSearch from "../components/PokemonCardSearch";
import "../styles/pages/Search.css";

const Search = () => {
  const [value, setValue] = useState("");
  const [print, setPrint] = useState(false);
  const [result, setResult] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setResult(value)
    setPrint(true)
  }

  return (
    <div className="row" id="content-wrap">
      <div className="home-header text-center">
        <h1 className="display-3">
          <strong>Search</strong>
        </h1>
        <small>Enter a Pokemon's Name or National PokeDex Number!</small>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
            type="text"
            onChange={handleChange}
            className="form-control rounded"
            id="search-query"
            placeholder="Search for a Pokemon!"
            aria-label="Search"
        />
        <input type="submit" value="Find" className="find-button"/>
      </form>

      {print ? <PokemonCardSearch pokemonProp={result} /> : null}
    </div>
  );
};

export default Search;
