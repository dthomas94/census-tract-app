import { Tract } from "../../types/Tract";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

type TractCardProps = {
  data: Tract;
};
export const TractCard = ({ data }: TractCardProps) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }} data-testid="tract-card">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {data.NAMELSAD}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            LAT: {data.INTPTLAT}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            LON: {data.INTPTLON}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/tracts/${data.fid}`}>
            View Tract Page
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
