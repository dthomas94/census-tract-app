# Planet App

## About

This app allows the user to get census tract data from a sqlite db. Users can also find more info about a tract by viewing its individual page.

<hr/>

## Running the App

### API

Navigate to the api folder and run the init.sh executable. This will start the server

### UI

Navigate to the "planet" folder and run `yarn start`. This will run the dev server for the frontend

## Known Issues

1. When trying to return all columns for a tract, the geom column presents an issue in which the following error occurs

   `raise TypeError(f'Object of type {o.__class__.__name__} ' TypeError: Object of type bytes is not JSON serializable"`

## Future Work

1. Add chart for displaying geometry data
