import { Skeleton } from "@mui/material";
import styled from "styled-components";

export const TrackSkeleton = styled(Skeleton)`
  width: 644px !important;
  height: 100px !important;
  margin-bottom: 40px !important;

  @media (max-width: 768px) {
    width: 90vw !important;
    margin-bottom: 16px !important;
  }
`;
