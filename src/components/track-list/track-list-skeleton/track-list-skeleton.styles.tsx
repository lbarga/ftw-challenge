import { Skeleton } from "@mui/material";
import styled from "styled-components";

export const TrackSkeleton = styled(Skeleton)`
  width: 644px;
  height: 100px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 90vw;
    margin-bottom: 16px;
  }
`;
