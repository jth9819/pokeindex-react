import "../styles/components/PokemonCardBrowse.css";

const PokemonCardBrowse = ({ id, image, name, types }) => {
  const style = types[0].type.name + " card-container";
  let pokemonTypes = null;

  // Check number of types and store
  if (types.length === 1) {
    pokemonTypes = types[0].type.name;
  }
  if (types.length === 2) {
    pokemonTypes = types[0].type.name + " / " + types[1].type.name;
  }

  return (
    <div className={style}>
      <div className="number">
        {/* Displays pokemon number */}
        <small>#0{id}</small>
      </div>
      {/* Displays pokemon image */}
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        {/* Displays pokemon name */}
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        {/* Displays pokemon details */}
        <small>
          <strong>Type: </strong>
          {pokemonTypes.charAt(0).toUpperCase() + pokemonTypes.slice(1)}
        </small>
      </div>
    </div>
  );
};

export default PokemonCardBrowse;
