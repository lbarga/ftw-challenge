import { PlaylistTrackItemModel } from "@/models/playlist-model";
import { formatPlayerTime } from "@/utils/time-format";
import { CircularProgress, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { BackIcon } from "../icons/back-icon";
import { BackwardIcon } from "../icons/backward-icon";
import { FastForwardIcon } from "../icons/fast-forward-icon";
import { NextIcon } from "../icons/next-icon";
import { PauseIcon } from "../icons/pause-icon";
import { PlayIcon } from "../icons/play-icon";
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

let interval: NodeJS.Timeout | null = null;

type PlayerProps = {
  trackItem: PlaylistTrackItemModel | null;
  onClickNextTack: () => void;
  onClickBackTack: () => void;
};

export const Player = ({
  trackItem,
  onClickBackTack,
  onClickNextTack,
}: PlayerProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  const handleStopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    if (interval) {
      clearInterval(interval);
      interval = null;
    }

    setCurrentTime(0);
    setPlaying(false);
  };

  const handlePauseAudio = () => {
    if (audio) {
      audio.pause();
    }

    if (interval) {
      clearInterval(interval);
      interval = null;
    }

    setPlaying(false);
  };

  audio?.addEventListener("loadedmetadata", () => {
    if (!totalTime) {
      setTotalTime(audio.duration);
    }
  });

  const handlePlayAudio = () => {
    if (!playing) {
      setPlaying(true);

      audio?.play();

      interval = setInterval(() => {
        if (audio) {
          setCurrentTime(audio?.currentTime);
        }
      }, 500);

      audio?.addEventListener("ended", () => {
        handleStopAudio();
        onClickNextTack();
      });
    }

    if (playing) {
      handlePauseAudio();
    }
  };

  const handleJumpForward = () => {
    if (audio) {
      audio.currentTime += 3;
    }
  };

  const handleJumpBackward = () => {
    if (audio) {
      audio.currentTime -= 3;
    }
  };

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    if (audio) {
      const sliderValue = typeof newValue === "number" ? newValue : 0;
      const newTime = (sliderValue / 100) * totalTime;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const getCurrentTime = (): string => {
    return formatPlayerTime(currentTime);
  };

  const getTimeLeft = (): string => {
    return formatPlayerTime(totalTime - currentTime);
  };

  const getPercentageCompleted = (): number => {
    if (totalTime === 0) return 0;
    const percentage = (currentTime / totalTime) * 100;
    return percentage;
  };

  const test = () => {
    handleStopAudio();
    onClickBackTack();
  };

  useEffect(() => {
    if (audio) {
      setFirstTime(false);

      if (!firstTime) {
        handlePlayAudio();
      }
    }
  }, [audio]);

  useEffect(() => {
    handleStopAudio();

    if (trackItem) {
      setAudio(new Audio(trackItem?.track.preview_url));
    }
  }, [trackItem]);

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
            value={getPercentageCompleted()}
            aria-label="Small"
            valueLabelDisplay="off"
            onChange={handleChangeSlider}
          />
          <PlayerTimeContainer>
            <PlayerTimeLabel>{getCurrentTime()}</PlayerTimeLabel>
            <PlayerTimeLabel>{`-${getTimeLeft()}`}</PlayerTimeLabel>
          </PlayerTimeContainer>
          <Space height={8} />
          <PlayerButtonsContainer>
            <IconButton size="small" color="primary" onClick={test}>
              <BackIcon />
            </IconButton>
            <IconButton
              size="small"
              color="primary"
              onClick={handleJumpBackward}
            >
              <BackwardIcon />
            </IconButton>
            <PlayerPlayButton
              variant="contained"
              color="primary"
              onClick={handlePlayAudio}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </PlayerPlayButton>
            <IconButton
              size="small"
              color="primary"
              onClick={handleJumpForward}
            >
              <FastForwardIcon />
            </IconButton>
            <IconButton size="small" color="primary" onClick={onClickNextTack}>
              <NextIcon />
            </IconButton>
          </PlayerButtonsContainer>
        </PlayerContentContainer>
      )}
    </PlayerContainer>
  );
};
