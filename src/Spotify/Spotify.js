import axios from 'axios';

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "3e27750eccfa4c6d8644e5be0d520075";
const redirectUri = "http://localhost:5173";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async (config) => {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export const clearClientToken = () => {
    apiClient.interceptors.request.use(async (config) => {
      delete config.headers.Authorization;
      return config;
    });
  };
  

export default apiClient;