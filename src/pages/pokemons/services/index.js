import api from "../api/config";

export const getPokemons = () => api.get("/pokemon");
export const getPokemonDetails = (pokemon) => api.get(`/pokemon/${pokemon}`);
