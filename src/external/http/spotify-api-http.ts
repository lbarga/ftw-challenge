import { ENVIROMENTS } from "@/constants/enviroments";
import { TOKENS } from "@/constants/tokens";
import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const { SPOTIFY_API } = ENVIROMENTS;

const { ACCESS_TOKEN } = TOKENS;

const spotifyAPI = axios.create({
  baseURL: SPOTIFY_API,
});

spotifyAPI.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = Cookies.get(ACCESS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default spotifyAPI;
