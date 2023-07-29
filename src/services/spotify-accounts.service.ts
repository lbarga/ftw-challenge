import { ENVIROMENTS } from "@/constants/enviroments";
import spotifyAccountsAPI from "@/external/http/spotify-accounts-http";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = ENVIROMENTS;

const BASE_URL = "/api/token";

const spotifyClientId = SPOTIFY_CLIENT_ID || "";
const spotifyClientSecret = SPOTIFY_CLIENT_SECRET || "";

const postCredentials = () => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("grant_type", "client_credentials");
  urlSearchParams.append("client_id", spotifyClientId);
  urlSearchParams.append("client_secret", spotifyClientSecret);

  spotifyAccountsAPI.post(BASE_URL, urlSearchParams);
};

export const spotifyAccountsService = {
  postCredentials,
};
