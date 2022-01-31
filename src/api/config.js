import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";

const BASE_URL = "https://it-shatle-demo-api.herokuapp.com";

const config = {
    baseURL: BASE_URL,
};

const api = axios.create(config);

api.interceptors.request.use((axiosConfig) => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;

    return axiosConfig;
});

export default api;
