import spotifyAPI from "@/external/http/spotify-api-http";
import { PlaylistModel } from "@/models/playlist-model";
import { AxiosResponse } from "axios";

const BASE_URL = "/playlists";

const getPlaylist = async (): Promise<AxiosResponse<PlaylistModel>> => {
  const response = await spotifyAPI.get(`${BASE_URL}/5VhUPmOwSNuj1ZShpIdKbK`);

  return response;
};

export const spotifyPlaylistsService = {
  getPlaylist,
};
