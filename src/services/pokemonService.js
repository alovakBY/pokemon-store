import api from "../api/config";

class PokemonService {
  static instance = new PokemonService();

  getPokemons(page) {
    return api.get("/products", {
      params: {
        page,
        limit: 20,
      },
    });
  }

  getPokemonDetails(id) {
    return api.get(`/products/${id}`);
  }
}

export default PokemonService.instance;
