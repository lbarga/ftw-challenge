"use client";

import { ItemModel } from "@/models/playlist-model";
import { spotifyAccountsService } from "@/services/spotify-accounts.service";
import { spotifyPlaylistsService } from "@/services/spotify-playlists-service";
import { useEffect, useState } from "react";
import { HomeContainer } from "./home-page.styles";

export default function HomePage() {
  const [tracks, setTracks] = useState<ItemModel[]>([]);

  const handleClick = async () => {
    const response = await spotifyPlaylistsService.getPlaylist();

    setTracks(response.data.tracks.items);
  };

  useEffect(() => {
    spotifyAccountsService.postCredentials();
  }, []);

  return (
    <HomeContainer>
      <h1>HomePage</h1>
      <button onClick={handleClick}>Test</button>
      {tracks.map((track) => (
        <div key={track.track.id}>
          <h3>{track.track.name}</h3>
        </div>
      ))}
    </HomeContainer>
  );
}
