import { Tract } from "../../types/Tract";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StyledCard } from "./TractCard.styled";
import { useNavigate } from "react-router-dom";

type TractCardProps = {
  data: Tract;
};
export const TractCard = ({ data }: TractCardProps) => {
  const navigate = useNavigate();
  return (
    <StyledCard
      sx={{ minWidth: 275 }}
      data-testid="tract-card"
      onClick={() => navigate(`/tracts/${data.fid}`)}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom className="card-heading">
          {data.NAMELSAD}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          LAT: {data.INTPTLAT}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          LON: {data.INTPTLON}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
