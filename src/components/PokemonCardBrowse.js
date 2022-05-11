import React from "react";

import "../styles/components/PokemonCardBrowse.css";

const PokemonCardBrowse = ({ id, image, name, types }) => {
  const style = types[0].type.name + " card-container";
  let pokemonTypes = null;

  if (types.length === 1) {
    pokemonTypes = types[0].type.name;
  }
  if (types.length === 2) {
    pokemonTypes = types[0].type.name + " / " + types[1].type.name;
  }

  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <small>
          <strong>Type:</strong>{" "}
          {pokemonTypes.charAt(0).toUpperCase() + pokemonTypes.slice(1)}
        </small>
      </div>
    </div>
  );
};

export default PokemonCardBrowse;
