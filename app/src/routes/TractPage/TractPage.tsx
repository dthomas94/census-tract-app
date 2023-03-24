import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTract } from "../../api/tracts";
import { Map } from "../../common/Map/Map";
import { Tract } from "../../types/Tract";

export const TractPage = () => {
  const goToHome = useNavigate();
  const { id } = useParams();
  const [tract, setTract] = useState<Tract | undefined>(undefined);
  const rowVals: any[] = [];
  const columns = [] as string[];

  if (tract) {
    Object.entries(tract).forEach(([key, val]) => {
      if (key !== "geom" && key !== "fid") {
        columns.push(key);

        rowVals.push(val);
      }
    });
  }

  useEffect(() => {
    const asyncGetTract = async () => {
      const tract = await getTract(id as string);
      setTract(tract as Tract);
    };

    if (id) {
      asyncGetTract();
    }
  }, [id]);
  return (
    <>
      <Box>
        <Button onClick={() => goToHome("/")}>Back</Button>
      </Box>
      <Box height="300px" width="100%">
        {!!tract && (
          <Map
            center={{
              lat: Number(tract.INTPTLAT),
              lng: Number(tract.INTPTLON),
            }}
            markers={[
              {
                lat: Number(tract.INTPTLAT),
                lng: Number(tract.INTPTLON),
              },
            ]}
          />
        )}
      </Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell key={column} align="right">
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={tract?.fid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {rowVals.map((rowVal, index) => (
                <TableCell key={index} align="right">
                  {rowVal}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
