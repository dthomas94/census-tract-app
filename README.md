# Web-Apps Full Stack Developer Homework

## Data

Included is `homework.gpkg` which is a [GeoPackage](http://www.geopackage.org/guidance/getting-started.html).
GeoPackages can be read with SQLite drivers. 

## Task

### Back-end

Write a REST service using Python or Go which will serve the `tracts` table.
`main.py` has been included as a skeleton for those wishing to use Python for this task.

The service should provide the following endpoints:

  1. `GET /tracts/` - A listing of the tracts
  2. `GET /tracts/<id>` - Returns the detail of the tract for the `id` in the URL.

Bonus points:

  * Include tests!

### Front-end

Write a React application which renders the list of tracts
then links to a detail page.

Bonus points:

  * Use of Material-UI.
  * Rendering the geometry of the Census tract in the detail view.

## Implementation notes

  1. Any design decision not specified herein are open. Completed projects will be evaluated on completeness and cleanliness.
  2. The final project should be shared as a public Git repo. It should include the following:
    * A `README.md` file with enough instructions for setting up and running the project.
    * All of the code and support files for the REST service.
  3. This project is intended to take less than 4 hours. Do not get hung up on scaling or persistence issues. Bonus points for adding comments in the code that recognizes where those problems could occur.
