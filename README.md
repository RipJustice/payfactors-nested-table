# Project Notes

This project is meant to be a demo only at this point. However, it has been structured so as to be easy to extend. At the moment it features a router with only a single page however this page has its own module and as such is lazy loaded. Additional page modules with associated components may be added in the future and attached to the router so that any and all future pages in the app may also be lazy loaded.

Future possible additions not yet added:

  - State management as needed for any data that can be modified.

  - Additional nested tables with reworked logic to show/hide as needed. Right now the single nested table uses the primeng table's built in nested table toggle feature. In order to add more nested tables the toggle would be removed and the click action that currently applies a border to clicked items would be reworked to show/hide nested tables based on the item clicked.

  - The mock data would be replaced with one or more api calls to return the data. Ideally one api would serve up this data using a reworked version of the existing service method however forkJoin or mergeMap/switchMap/concatMap logic could also be used to combine data from several api's if necessary to obtain the needed data. The nested table structure and models for the data may change depending on how the final data is structured along with the content of the data.

  - Check boxes, inputs and additional buttons in the app would need to have their functionality implemented.
  
  - Additionally, right now the current parent table is intentionally too large for the space allotted to it as part of the project was to have the parent scroll horizontally with the nested tables being capable of a vertical scroll when needed. Fitting the parent table to the screen so that it only scrolls horizontally if the screen is substantially shrunk would be better and adding paging or virtual scrolling to the table to account for larger data sets would also be good to have in the project.

# PayfactorsNestedTable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4001/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


