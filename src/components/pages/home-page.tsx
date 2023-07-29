"use client";
import { servicesService } from "@/apis/services-service";
import { ServiceModel } from "@/models/service-model";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { Chip } from "../chip/chip";
import {
  HomeContainer,
  HomeTableCellHeader,
  HomeTableContainer,
} from "./home-page.styles";

export default function HomePage() {
  const [services, setServices] = useState<ServiceModel[]>([]);

  const fetch = async () => {
    const data = servicesService.getServices();

    setServices(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const testEnv = process.env.NEXT_PUBLIC_TEST_ENV;

  console.log(testEnv);

  return (
    <>
      <h1>TestEnv: {testEnv}</h1>
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
    </>
  );
}
