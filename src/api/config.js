import axios from "axios";

const BASE_URL = "https://it-shatle-demo-api.herokuapp.com";

const config = {
  baseURL: BASE_URL,
};

export default axios.create(config);
