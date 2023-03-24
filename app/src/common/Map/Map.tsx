import GoogleMapReact, { Coords } from "google-map-react";

type MapProps = {
  center: Coords;
  zoomLevel?: number;
  markers: Coords[];
};

export const Map = ({ center, zoomLevel = 5, markers }: MapProps) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
      }}
      defaultCenter={center}
      defaultZoom={zoomLevel}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => {
        markers.forEach(({ lat, lng }) => {
          new maps.Marker({
            position: {
              lat: lat,
              lng: lng,
            },
            map: map,
          });
        });
      }}
    />
  );
};
