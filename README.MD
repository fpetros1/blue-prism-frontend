## Tests & Builds
[![Build Status](http://jenkins.fpetros.com/buildStatus/icon?job=Blue+Prism+Frotend+Develop+Testing&subject=Test%20Develop)](http://jenkins.fpetros.com/job/Blue%20Prism%20Frotend%20Develop%20Testing/lastBuild)

[![Build Status](http://jenkins.fpetros.com/buildStatus/icon?job=Blue+Prism+Frotend+Build+And+Deploy&subject=Deploy%20Main)](http://jenkins.fpetros.com/job/Blue%20Prism%20Frotend%20Build%20And%20Deploy/lastBuild)

## Technical Overview

* Challenge provided by BluePrism in their selection proccess
* Built with Node 14.x and NPM 6.x
* React + Redux app with custom webpack configuration
* The mock server src is in the main (received from blueprism, no modification)
* After each commit to the develop branch, this [![Jenkins Project](JenkinsProjects)](http://jenkins.fpetros.com/job/Blue%20Prism%20Frotend%20Develop%20Testing) triggers to test the new code and updates the badge in this README
* User Jest + @testing-library/react to do unit testing of React components
* Final build of the frontend is being hosted [![here](FrontendHost)](http://apps.fpetros.com/blueprism) and the mock server [![here](MockServer)](http://apps.fpetros.com/blueprism-mock-server)

## Functionality Overview

* Able to retire/unretire a schedule by clicking on the respective buttons
* After clicking the schedule card title (card top, blue background), the app fetches the logs from that particular schedule and changes the color of the background to indicate a `selected` state
* Clicking the schedule card title that is in a selected state will `deselect` the schedule and clear the logs section
* The UI adapts to mobile resolution

## Known Issues

* Operating System fractional scaling breaks the UI (150% scaling from 1920x1080 resolution)
* No support for 1366 x 768 (HD) resolution (use 80% on browser for workaround)

## TO DO

* More tests
* Better error handling
* Optimize project components(React) in general
* Localized CSS for each component
* Better CSS styling (I'm not the best web designer)
* Add 1366 x 768 (HD) support

## Building & Testing the App
* The envinronment variable `BP_MOCK_SERVER_URL` must be set with the URL of the mock server before building the App
* Install the dependencies with `npm install` or `npm i`
* Either run the App locally with `npm start` or build with `npm run build` (output -> /build) 
* To run the tests, either use `npm test` to run the tests a single time or `npm run test:watch` to run the tests and watch for file changes, the tests will run again when they are changed until cancelled

## Hosted On

* [![Frontend Host](FrontendHost)](http://apps.fpetros.com/blueprism)
* [![Mock Server](MockServer)](http://apps.fpetros.com/blueprism-mock-server)
* [![Jenkins Project for Auto-trigger test of develop branch](JenkinsProjects)](http://jenkins.fpetros.com/job/Blue%20Prism%20Frotend%20Develop%20Testing)
* [![Jenkins Project for building and deploying the main branch](JenkinsProjects)](http://jenkins.fpetros.com/job/Blue%20Prism%20Frotend%20Build%20And%20Deploy)
