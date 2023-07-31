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
};

export const TrackList = ({ trackItems }: TrackListProps) => {
  return (
    <TrackListContainer>
      <TrackListHeadContainer>
        <TrackListHeadTitle>Playlist Name</TrackListHeadTitle>
      </TrackListHeadContainer>
      <TrackListTracksContainer>
        {trackItems.length === 0 && <TrackListSkeleton />}
        {trackItems?.map((trackItem) => {
          return (
            <Track
              key={trackItem.track.id}
              url={trackItem.track.album.images[0].url}
              trackName={trackItem.track.name}
              artistName={trackItem.track.artists[0].name}
              popularity={trackItem.track.popularity}
            />
          );
        })}
      </TrackListTracksContainer>
    </TrackListContainer>
  );
};