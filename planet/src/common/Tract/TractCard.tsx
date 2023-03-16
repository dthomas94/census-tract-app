import { Tract } from "../../types/Tract";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

type TractCardProps = {
  data: Tract;
};
export const TractCard = ({ data }: TractCardProps) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.NAMELSAD}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="body2">LAT: {data.INTPTLAT}</Typography>
          <Typography variant="body2">LON: {data.INTPTLON}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/tracts/${data.fid}`}>View Tract Page</Link>
        </CardActions>
      </Card>
    </>
  );
};
