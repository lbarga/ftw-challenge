"use client";

import { PlaylistTrackItemModel } from "@/models/playlist-model";
import { spotifyAccountsService } from "@/services/spotify-accounts.service";
import { spotifyPlaylistsService } from "@/services/spotify-playlists-service";
import { useEffect, useState } from "react";
import { Player } from "../player/player";
import { TrackList } from "../track-list/track-list";
import { HomeContainer } from "./home-page.styles";

export default function HomePage() {
  const [trackItems, setTrackItems] = useState<PlaylistTrackItemModel[]>([]);

  const fetch = async () => {
    spotifyAccountsService.postCredentials().then(async () => {
      const response = await spotifyPlaylistsService.getPlaylist();

      setTrackItems(response.data.tracks.items);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <HomeContainer>
      <TrackList trackItems={trackItems} />
      <Player />
    </HomeContainer>
  );
}
