# Planet App 🌍

This app allows the user to get census tract data from a sqlite db. Users can also find more info about a tract by viewing its individual page.

<hr/>

## Running the App

### API 🔧

Navigate to the api folder and run the init.sh executable. This will start the server

### UI 💅🏿

1. To be able to view map data, you will need to add your API_KEY for Google Maps to the .env.local file

2. Navigate to the "planet" folder and run `yarn start`. This will run the dev server for the frontend

## Future Work 🚀

1. Add visulization for displaying geometry data
2. Improve backend performance (remove mapping data entries to get column names)
