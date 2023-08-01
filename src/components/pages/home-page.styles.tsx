import { Box, TableCell } from "@mui/material";
import styled from "styled-components";

export const HomeContainer = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px;
  gap: 32px;
  background: #f6f6f6;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HomeTableContainer = styled(Box)`
  width: 50%;
`;

export const HomeTableCellHeader = styled(TableCell)`
  font-weight: bold;
`;
