import { Box, Button, Slider } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export const PlayerContainer = styled(Box)`
  display: flex;
  width: 280px;
  height: 442px;
  border-radius: 40px;
  background: #ffffff;
`;

export const PlayerContentContainer = styled(Box)`
  display: flex;
  flex: 1;
  padding: 16px;
  flex-direction: column;
  align-items: center;
`;

export const PlayerImage = styled(Image)`
  border-radius: 20px;
  box-shadow: 0px 20px 60px 0px rgba(0, 0, 0, 0.15);
`;

export const PlayerTrackTitle = styled.p`
  color: #2e3271;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;
  text-align: center;
`;

export const PlayerTrackArtist = styled.p`
  color: rgba(124, 141, 181, 0.72);
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PlayerButtonsContainer = styled(Box)`
  display: flex;
  gap: 24px;
`;

export const PlayerPlayButton = styled(Button)`
  border-radius: 66px !important;
  width: 56px !important;
  min-width: 56px !important;
  height: 56px !important;
  min-height: 56px !important;
  padding: 0px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

  filter: drop-shadow(0px 15px 30px #ff9a45) !important;
`;

export const PlayerTimeContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PlayerTimeLabel = styled.p`
  color: #2e3271;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  opacity: 0.6000000238418579;
`;

export const PlayerSlider = styled(Slider)`
  padding: 4px !important;
`;

export const PlayerLoaderContainer = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
