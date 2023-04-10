import "../styles/components/PokemonCardBrowse.css";

const PokemonCardBrowse = ({ id, image, name, types }) => {
  const style = types[0].type.name + " card-container";
  let pokemonTypes = null;

  // Check number of types and store + fix casing
  if (types.length === 1) {
    pokemonTypes =
      types[0].type.name.charAt(0).toUpperCase() + types[0].type.name.slice(1);
  }
  if (types.length === 2) {
    pokemonTypes =
      types[0].type.name.charAt(0).toUpperCase() +
      types[0].type.name.slice(1) +
      " / " +
      types[1].type.name.charAt(0).toUpperCase() +
      types[1].type.name.slice(1);
  }

  return (
    <div className={style}>
      <div className="pokedex-number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <small>
          <strong>Type: </strong>
          {pokemonTypes}
        </small>
      </div>
    </div>
  );
};

export default PokemonCardBrowse;
