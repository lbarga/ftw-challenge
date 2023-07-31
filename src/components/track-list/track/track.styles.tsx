import { Box, Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export const TrackContainer = styled(Box)`
  display: flex;
  flex: 1;
  width: 644px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.02);
  height: 100px;
  min-height: 100px;
  align-items: center;
  padding: 0px 8px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    width: 85vw;
  }
`;

export const TrackImageContainer = styled(Image)`
  border-radius: 20px;
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.16);
`;

export const TrackInternalContainer = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 0px 32px;

  @media (max-width: 768px) {
    margin: 0px;
    justify-content: space-around;
  }
`;

export const TrackDataContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  width: 55%;
`;

export const TrackName = styled.p`
  color: #2e3271;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackArtistName = styled.p`
  color: var(--secondary-color, rgba(124, 141, 181, 0.72));
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackPlayButton = styled(Button)`
  border-radius: 14px !important;
  background: #fff;
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.06);
  min-width: 78px;
  max-width: 78px;
  min-height: 44px !important;
  max-height: 44px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TrackPlaySVG = styled(Image)``;

export const TrackPlayLabel = styled.p`
  color: var(--primary-color, #313d58);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 1px;

  margin-left: 8px;
`;
