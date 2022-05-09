import "../styles/PokemonCardBrowse.css";

const PokemonCardBrowse = ({ id, name, image, type }) => {
  return (
    <div className="browse-card-container">
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  );
};

export default PokemonCardBrowse;
