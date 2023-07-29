import { ServiceStatus } from "@/models/service-model";
import MaterialChip from "@mui/material/Chip";
import styled from "styled-components";

const statusBackgroundColors = {
  [ServiceStatus.UP]: "#4caf50",
  [ServiceStatus.WARNING]: "#ff9800",
  [ServiceStatus.ERROR]: "#f44336",
};

type ChipProps = {
  status: ServiceStatus;
};

export const SChip = styled(MaterialChip)<ChipProps>`
  background-color: ${(props) =>
    statusBackgroundColors[props.status]} !important;
`;
