import { IconButton } from "@mui/material";
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
  PlayerPlayButton,
  PlayerSlider,
  PlayerTimeContainer,
  PlayerTimeLabel,
  PlayerTrackArtist,
  PlayerTrackTitle,
} from "./player.styles";

// TODO: criar um contexto e trazer musicas de la
const mockTrack = {
  url: "https://i.scdn.co/image/ab67616d00001e027d419ac975423c069995c7bb",
  trackName: "",
};

export const Player = () => {
  return (
    <PlayerContainer>
      <PlayerContentContainer>
        <PlayerImage
          src={mockTrack.url}
          width={248}
          height={213}
          alt="Picture of the author"
        />
        <Space height={24} />
        <PlayerTrackTitle>Living My Best Life</PlayerTrackTitle>
        <Space height={16} />
        <PlayerTrackArtist>Ben Hector</PlayerTrackArtist>
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
    </PlayerContainer>
  );
};
