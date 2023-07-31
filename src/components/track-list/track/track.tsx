import {
  TrackArtistName,
  TrackContainer,
  TrackDataContainer,
  TrackImageContainer,
  TrackInternalContainer,
  TrackName,
  TrackPlayButton,
  TrackPlayLabel,
  TrackPlaySVG,
} from "./track.styles";

type TrackProps = {
  url: string;
  trackName: string;
  artistName: string;
  popularity: number;
};

export const Track = ({
  url,
  trackName,
  artistName,
  popularity,
}: TrackProps) => {
  return (
    <TrackContainer>
      <TrackImageContainer
        src={url}
        width={84}
        height={84}
        alt="Picture of the author"
      />
      <TrackInternalContainer>
        <TrackDataContainer>
          <TrackName>{trackName}</TrackName>
          <TrackArtistName>{artistName}</TrackArtistName>
        </TrackDataContainer>
        <TrackPlayButton>
          <TrackPlaySVG src="/play.svg" width={10} height={12} alt="play-svg" />
          <TrackPlayLabel>{popularity}</TrackPlayLabel>
        </TrackPlayButton>
      </TrackInternalContainer>
    </TrackContainer>
  );
};
