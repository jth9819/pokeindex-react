import Card from "react-bootstrap/Card";
import "../styles/components/PokemonCard.css";

const PokemonCard = (props) => {
    return (
        <Card className="search-card">
            <h2 id="pokemon-name">
                {props.pokemonObject.name.charAt(0).toUpperCase() + props.pokemonObject.name.slice(1)}
            </h2>{" "}
            <img id="pokemon-image" src={props.pokemonObject.image} alt="Pokemon" />{" "}
            <p id="pokemon-id">#0{props.pokemonObject.id}</p>
            <p id="pokemon-types">
                <strong>Type: </strong>
                {props.pokemonTypes}
            </p>{" "}
        </Card>
    )
};

export default PokemonCard;
