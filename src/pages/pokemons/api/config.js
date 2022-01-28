import axios from "axios";

const config = {
    baseURL: " https://pokeapi.co/api/v2",
};

export default axios.create(config);
