import axios from "axios";
import API from "./apiConfig";

export async function searchGetPokemon(pokemonName) {
  const response = await API.get(pokemonName);
  console.log(response);

  return response;
}

export async function browseGetPokemon() {
  const limit = "?limit=18";
  const response = await API.get(limit);

  return response;
}
