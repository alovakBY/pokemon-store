import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";
import authService from "../services/authService";

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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      authService.signOut();
    }
    if (error.response.status === 400) {
      return Promise.reject(error.response.data);
    }
  }
);

export default api;
