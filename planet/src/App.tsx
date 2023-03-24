import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getTracts } from "./api/tracts";
import { Tract } from "./types/Tract";
import { Pagination } from "./common/Pagination/Pagination";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function App() {
  const [tracts, setTracts] = useState<Tract[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const asyncGetTracts = async () => {
      setIsLoading(true);
      const tracts = await getTracts();
      setTracts(tracts);
      setIsLoading(false);
    };
    asyncGetTracts();
  }, []);

  return (
    <Grid
      container
      className="app-container"
      rowGap={5}
      justifyContent="space-between"
      columnGap={1}
    >
      <Typography variant="h1" textAlign="center" width="100%">
        Welcome to Planet 🌍
      </Typography>
      {isLoading ? (
        <CircularProgress
          className="loader-icon"
          style={{ height: 100, width: 100 }}
          size="lg"
        />
      ) : (
        <Pagination items={tracts} />
      )}
    </Grid>
  );
}

export default App;
