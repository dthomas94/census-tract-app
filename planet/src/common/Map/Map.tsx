import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import { Marker } from "./Marker";

type MapProps = {
  center: Coords;
  zoomLevel?: number;
  markers: Coords[];
};

export const Map = ({ center, zoomLevel = 5, markers }: MapProps) => {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        }}
        defaultCenter={center}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          new maps.Marker({
            position: {
              lat: markers[0].lat,
              lng: markers[0].lng,
              text: "hello",
            },
            map: map,
          });
        }}
      />
    </div>
  );
};
