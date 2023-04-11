import Card from "react-bootstrap/Card";
import "../styles/components/PokemonCard.css";

const PokemonCard = ({ id, image, name, types }) => {
    let pokemonTypes = null;

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

    const style = pokemonTypes.toLowerCase() + " card-container";

    return (
        <div className={style}>
            <div className="pokedex-number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt="Pokemon" />
            <div className="detail-wrapper">
                <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <small>
                    <strong>Type: </strong>
                    {pokemonTypes}
                </small>
            </div>
        </div>
    )
};

export default PokemonCard;
