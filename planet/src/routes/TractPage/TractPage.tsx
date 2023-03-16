import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTract } from "../../api/tracts";
import { Tract } from "../../types/Tract";

export const TractPage = () => {
  const { id } = useParams();
  const [tract, setTract] = useState<Tract | undefined>(undefined);

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
        <Typography variant="h5" display="inline-block">
          {tract?.NAMELSAD} <span> {`(geoid: ${tract?.GEOID})`}</span>
        </Typography>
        <Box>
          <Typography display="inline-block" width="150px">
            LAT: {tract?.INTPTLAT}
          </Typography>
          <Typography display="inline-block" width="150px">
            LON: {tract?.INTPTLON}
          </Typography>
        </Box>
        <Box>
          <Typography display="inline-block" width="150px">
            ALAND: {tract?.ALAND}
          </Typography>
          <Typography display="inline-block" width="150px">
            AWATER: {tract?.AWATER}
          </Typography>
        </Box>
        <Box>
          <Typography display="inline-block" width="150px">
            STATEFP: {tract?.STATEFP}
          </Typography>
          <Typography display="inline-block" width="150px">
            COUNTYFP: {tract?.COUNTYFP}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
