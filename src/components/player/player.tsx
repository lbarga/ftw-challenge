import { PlaylistTrackItemModel } from "@/models/playlist-model";
import { CircularProgress, IconButton } from "@mui/material";
import { BackIcon } from "../icons/back-icon";
import { FastForwardIcon } from "../icons/fast-forward-icon";
import { NextIcon } from "../icons/next-icon";
import { PlayIcon } from "../icons/play-icon";
import { PreviousIcon } from "../icons/previous-icon";
import { Space } from "../space/space";
import {
  PlayerButtonsContainer,
  PlayerContainer,
  PlayerContentContainer,
  PlayerImage,
  PlayerLoaderContainer,
  PlayerPlayButton,
  PlayerSlider,
  PlayerTimeContainer,
  PlayerTimeLabel,
  PlayerTrackArtist,
  PlayerTrackTitle,
} from "./player.styles";

type PlayerProps = {
  trackItem: PlaylistTrackItemModel | null;
};

export const Player = ({ trackItem }: PlayerProps) => {
  return (
    <PlayerContainer>
      {!trackItem && (
        <PlayerLoaderContainer>
          <CircularProgress size={"5rem"} />
        </PlayerLoaderContainer>
      )}
      {trackItem && (
        <PlayerContentContainer>
          <PlayerImage
            src={trackItem?.track.album.images[1].url}
            width={248}
            height={213}
            alt="Picture of the author"
          />
          <Space height={24} />
          <PlayerTrackTitle>{trackItem.track.name}</PlayerTrackTitle>
          <Space height={16} />
          <PlayerTrackArtist>
            {trackItem.track.artists[0].name}
          </PlayerTrackArtist>
          <Space height={24} />
          <PlayerSlider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <PlayerTimeContainer>
            <PlayerTimeLabel>1:21</PlayerTimeLabel>
            <PlayerTimeLabel>-2:36</PlayerTimeLabel>
          </PlayerTimeContainer>
          <Space height={8} />
          <PlayerButtonsContainer>
            <IconButton size="small" color="primary">
              <BackIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <PreviousIcon />
            </IconButton>
            <PlayerPlayButton variant="contained" color="primary">
              <PlayIcon />
            </PlayerPlayButton>
            <IconButton size="small" color="primary">
              <FastForwardIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <NextIcon />
            </IconButton>
          </PlayerButtonsContainer>
        </PlayerContentContainer>
      )}
    </PlayerContainer>
  );
};
