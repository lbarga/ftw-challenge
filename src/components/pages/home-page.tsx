"use client";
import { servicesService } from "@/apis/services-service";
import { ServiceModel } from "@/models/service-model";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Chip } from "../chip/chip";
import {
  HomeContainer,
  HomeTableCellHeader,
  HomeTableContainer,
} from "./home-page.styles";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const SButton = styled(Button)`
  background-color: red;
  &:hover {
    background-color: orange;
  }
`;

export default function HomePage() {
  const [services, setServices] = useState<ServiceModel[]>([]);

  const fetch = async () => {
    const data = servicesService.getServices();

    setServices(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <HomeContainer>
      <HomeTableContainer>
        <Table sx={{ minWidth: 0 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <HomeTableCellHeader>Serviços</HomeTableCellHeader>
              <HomeTableCellHeader align="left">Status</HomeTableCellHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <TableRow
                key={service.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {service.service}
                </TableCell>
                <TableCell align="left">
                  <Chip status={service.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </HomeTableContainer>
    </HomeContainer>
  );
}
