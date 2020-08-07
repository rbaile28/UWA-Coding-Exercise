# uhlelo

Collaboration is an important and often critical step in any modern business ventures. That's why we created *uhlelo*, the smart team pool scheduling software. Uhlelo means "schedule" in Zulu, and we at uhlelo think that's a perfect way to describe what we've built. A beautiful, functional application with collaboration baked in right from the beginning, to help you not only change the way you manage your team pools, but the world too. Launching as a freemium subscription service, users may upgrade to the PRO version for only $7.99 a month for the first year and $799.99 every year after that. Sign up today and experience the freedom and excitement of... ***uhlelo***.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.

## App UI Flow

Considerations were taken to mirror app functionality and flow as closely to spec sheet as possible. The app functions as follows:

* New teams are created and assigned to one of 4 predefined (and expandable within the team service) pools
* Pools then establish a cross division rival in the edit pool page
* Then a schedule is created by week by assigning teams to individual time slots
* Compatibility with each game is checked against (cross division rival) business rules
* Individual team schedules can then be viewed by clicking on the schedule icon on the main pools drop down page
* Team names and pools can be changed as desired

## App Structure

The app follows the normal Angular CLI structure with header and footer in app.component and all child components in their corresponding subdirectories. Corresponding SCSS and test files are located in the subdirectories as well. All external libraries (lodash, fontawesome) are loaded in via CDN in the index.html file.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
