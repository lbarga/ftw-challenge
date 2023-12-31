import { Box } from "@mui/material";
import styled from "styled-components";

export const TrackListContainer = styled(Box)`
  display: flex;
  flex: 1;
  max-width: 750px;
  max-height: 442px;
  border-radius: 40px;
  box-shadow: 0px 4px 50px 15px rgba(99, 60, 247, 0.04);
  overflow: hidden;
  flex-direction: column;
  background-color: #fafafa;

  @media (max-width: 768px) {
    max-width: 95vw;
  }
`;

export const TrackListHeadContainer = styled(Box)`
  display: flex;
  flex: 1;
  background: #fdfeff;
  min-height: 80px;
  max-height: 80px;
  padding: 0px 32px;
  align-items: center;
`;

export const TrackListHeadTitle = styled.p`
  color: #2e3271;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
`;

export const TrackListTracksContainer = styled(Box)`
  display: flex;
  flex: 1;
  padding: 32px;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;
