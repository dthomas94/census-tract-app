import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getTracts } from "./api/tracts";
import { Tract } from "./types/Tract";
import { Pagination } from "./common/Pagination/Pagination";
import "./App.css";

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
      <Pagination items={tracts} />
    </Grid>
  );
}

export default App;
