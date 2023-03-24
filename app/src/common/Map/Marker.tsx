import PlaceIcon from "@mui/icons-material/Place";
import { Coords } from "google-map-react";

type MarkerProps = {
  lat: Coords["lat"];
  lng: Coords["lng"];
  text?: string;
};

export const Marker = ({ lat, lng, text }: MarkerProps) => (
  <div className="pin">
    <PlaceIcon />
    {!!text && <p className="pin-text">{text}</p>}
  </div>
);
