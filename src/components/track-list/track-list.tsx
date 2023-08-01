import { PlaylistTrackItemModel } from "@/models/playlist-model";
import { TrackListSkeleton } from "./track-list-skeleton/track-list-skeleton";
import {
  TrackListContainer,
  TrackListHeadContainer,
  TrackListHeadTitle,
  TrackListTracksContainer,
} from "./track-list.styles";
import { Track } from "./track/track";

type TrackListProps = {
  trackItems: PlaylistTrackItemModel[];
  playlistName: string;
  onTrackClick: (trackItem: PlaylistTrackItemModel, index: number) => void;
};

export const TrackList = ({
  trackItems,
  playlistName,
  onTrackClick,
}: TrackListProps) => {
  return (
    <TrackListContainer>
      <TrackListHeadContainer>
        <TrackListHeadTitle>{`Playlist ${
          playlistName ? playlistName : "loading..."
        }`}</TrackListHeadTitle>
      </TrackListHeadContainer>
      <TrackListTracksContainer>
        {trackItems.length === 0 && <TrackListSkeleton />}
        {trackItems?.map((trackItem, index) => {
          return (
            <Track
              key={trackItem.track.id}
              url={trackItem.track.album.images[2].url}
              trackName={trackItem.track.name}
              artistName={trackItem.track.artists[0].name}
              popularity={trackItem.track.popularity}
              onClick={() => onTrackClick(trackItem, index)}
            />
          );
        })}
      </TrackListTracksContainer>
    </TrackListContainer>
  );
};
