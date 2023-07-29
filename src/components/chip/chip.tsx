import { ServiceStatus } from "@/models/service-model";
import { SChip } from "./chip.styles";

const StatusLabels = {
  [ServiceStatus.UP]: "bom",
  [ServiceStatus.WARNING]: "apresentando lentidão",
  [ServiceStatus.ERROR]: "fora do ar",
};

const getStatusLabel = (status: ServiceStatus): string => {
  return StatusLabels[status];
};

type ChipProps = {
  status: ServiceStatus;
};

export const Chip = ({ status }: ChipProps = { status: ServiceStatus.UP }) => {
  return (
    <SChip label={getStatusLabel(status)} status={status} data-testid="chip" />
  );
};
