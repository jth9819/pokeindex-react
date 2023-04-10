import axios from "axios";
import API from "./apiConfig";

export async function getPokemon(pokemonName) {
  let response = await API.get(pokemonName);
  return response;
}
