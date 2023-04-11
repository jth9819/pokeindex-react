import axios from "axios";

let baseURL = "https://pokeapi.co/api/v2/pokemon";

export default axios.create({ baseURL });