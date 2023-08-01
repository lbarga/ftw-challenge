import { Box } from "@mui/material";

type SizedBoxProps = {
  height?: number;
  width?: number;
};

export const Space = ({ height = 0, width = 0 }: SizedBoxProps) => (
  <Box height={height} width={width} data-testid={"space"} />
);
