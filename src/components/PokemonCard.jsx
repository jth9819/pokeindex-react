import Card from "react-bootstrap/Card";
import "../styles/components/PokemonCard.css";

const PokemonCard = (props) => {
    const style = props.pokemonTypes.toLowerCase() + " card-container";

    return (
        <div className={style}>
            <div className="pokedex-number">
                <small>#0{props.pokemonObject.id}</small>
            </div>
            <img src={props.pokemonObject.image} alt="Pokemon" />
            <div className="detail-wrapper">
                <h3>{props.pokemonObject.name.charAt(0).toUpperCase() + props.pokemonObject.name.slice(1)}</h3>
                <small>
                    <strong>Type: </strong>
                    {props.pokemonTypes}
                </small>
            </div>
        </div>
    )
};

export default PokemonCard;
