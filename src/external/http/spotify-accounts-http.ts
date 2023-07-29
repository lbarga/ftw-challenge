import { ENVIROMENTS } from "@/constants/enviroments";
import { TOKENS } from "@/constants/tokens";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

const { SPOTIFY_ACCOUNTS } = ENVIROMENTS;

const { ACCESS_TOKEN } = TOKENS;

const spotifyAccountsAPI = axios.create({
  baseURL: SPOTIFY_ACCOUNTS,
});

spotifyAccountsAPI.interceptors.response.use((config: AxiosResponse) => {
  if (config.data.access_token) {
    Cookies.set(ACCESS_TOKEN, config.data.access_token);
  }

  return config;
});

export default spotifyAccountsAPI;
