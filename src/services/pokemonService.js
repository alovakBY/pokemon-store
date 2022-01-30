import api from "../api/config";

class PokemonService {
  static instance = new PokemonService();

  getPokemons(token) {
    const auth = {
      Authorization: `Bearer ${token}`,
    };
    console.log(auth);
    return api.get("/products", auth);
  }

  getPokemonDetails(pokemon) {
    return api.get(`/pokemon/${pokemon}`);
  }
}

export default PokemonService.instance;
