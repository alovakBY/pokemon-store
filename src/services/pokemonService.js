import api from "../api/config";

class PokemonService {
    static instance = new PokemonService();

    getPokemons() {
        return api.get("/products");
    }

    getPokemonDetails(id) {
        return api.get(`/products/${id}`);
    }
}

export default PokemonService.instance;
