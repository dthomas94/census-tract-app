import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getTracts } from "./api/tracts";
import { TractCard } from "./common/Tract/TractCard";
import { Tract } from "./types/Tract";

function App() {
  const [tracts, setTracts] = useState<Tract[]>([]);

  useEffect(() => {
    const asyncGetTracts = async () => {
      const tracts = await getTracts();
      setTracts(tracts);
    };
    asyncGetTracts();
  }, []);

  return (
    <Grid container rowGap={5} justifyContent="space-between" columnGap={1}>
      {tracts?.map((tract) => (
        <Grid key={tract.fid} item className="tracts" xs>
          <TractCard key={tract.fid} data={tract} />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
