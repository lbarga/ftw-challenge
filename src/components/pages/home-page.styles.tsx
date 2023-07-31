import { Box, TableCell } from "@mui/material";
import styled from "styled-components";

export const HomeContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  padding: 8px;
`;

export const HomeTableContainer = styled(Box)`
  width: 50%;
`;

export const HomeTableCellHeader = styled(TableCell)`
  font-weight: bold;
`;
