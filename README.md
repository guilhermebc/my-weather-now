# MyWeatherNow

## Summary

* [Development environment](#environment)
    * [requirements](#requirements)
    * [instalation](#instalation)
    * [start application](#start-application)
* [Building and testing](#building-testing)
    * [Application](#building-application)
    * [Testes Unitários](#build-unit-testing)
    * [Testes E2E](#build-e2e-testing)
    * [Code coverage](#code-coverage)
* [Semantic Versioning](#semantic-versioning)
* [CHANGELOG](#changelog)


## <br/>
## <a name="requirements"></a>Requiriments

* Node v10.16.0
* NPM v6.9.0
* Angular CLI v8.3.18

## <br/>
## <a name="instalation"></a>Setup project

First of all, run:
```
npm install
```

## <br/>
## <a name="start-application"></a>Start application
Then, you can start project running, automatically the proxy to weather api will be setted:
```
npm start
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## <a name="building-testing"></a>Building, packaging and testing

## <br/>
## <a name="building-application"></a>Building application

Run
```
npm run build
```` 
to build the project. The build artifacts will be stored in the `dist/` directory. 

or 

```
npm run build-prod
```` 

or

```
npm run build-ci
```` 
to install, building ind production mode and running tests

## <a name="build-unit-testing"></a>Running tests

Run
```
npm run test
``` 
to execute the unit tests via [Karma](https://karma-runner.github.io).

or 

```
npm run test-prod
``` 
to execute in production mode with chromeheadless and test-coverage.

## Running end-to-end tests
## <a name="build-e2e-testing"></a>Running e2e

Run
```
ng e2e
```
to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## <br/>
## <a name="semantic-versioning"></a>Semantic Versioning
Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner, and
PATCH version when you make backwards-compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

Please [check docs](https://semver.org/) for more info.

## <br/>
## <a name="changelog"></a>CHANGELOG

Any changes made to the project should be in the changelog of that version, so be sure to update [this file](../CHANGELOG.md).

For more info about changelog, check [https://keepachangelog.com/en/1.0.0/](https://keepachangelog.com/en/1.0.0/)
