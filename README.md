# generator-grunt-angular
> Yeoman generator for AngularJS projects with GruntJS

generator-grunt-angular is one of the many generators for building a new Angular SPA (Single Page Application) based on 
yeoman generator. It is created as a sum of everything that you can find all over www and which is really necessary and 
helpful to start your work of building Angular application.

## Prerequisites

In order to use this generator-grunt-angular, you'll need to install the latest version of [nodeJS](https://nodejs.org/en/download/). 
Once when you install the latest version of nodeJS, or you already have it, you'll need to install globally following packages using 
node package manager (npm):
* yo
* generator-nswebangular
* grunt
* grunt-cli
* bower

To do so, you can just simply run npm command
```
npm yo generator-nswebangular grunt grunt-cli bower -g install
```

Once you are done with installation of all prerequisites, you'll be good to go to use generator-grunt-angular.

## Usage

Make a new project directory, and cd into it:
```
mkdir 'path/to/the/project/directory' && cd 'path/to/the/project/directory'
```

If you are done with this step, it is time to run and use generator-grunt-angular using following command:
```
yo nswebangular [projectName]
```

for example:
```
yo nswebangular myAngularApp
```
if you want to skip installation of the node and bower dependencies you can use `--skip-install` generator option, 
but this is not required if you running installation for a first time:
```
yo nswebangular myAngularApp --skip-install
```

## Generators

Available generators (sub-generators):

* [nswebangular](#app)
* [nswebangular:controller](#controller)
* [nswebangular:directive](#directive)
* [nswebangular:filter](#filter)
* [nswebangular:service](#service)

### App
Sets up a new AngularJS app, generating Grunt file with tasks and all the boilerplate you need to get started. The app generator also optionally installs additional AngularJS modules and libraries, such are Moment, Lodash and Angular UI Utils.

Example:
```bash
yo nswebangular myAngularApp
```

### Controller
Generates a controller in `app/assets/app/controllers`.

Example:
```bash
yo nswebangular:controller contactCtrl
```

Produces `app/assets/app/controllers/contact.controller.js`:
```javascript
(function () {
    'use strict';

    angular.module('app').controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$scope'];
    
    /* @ngInject */
    function contactCtrl($scope) {
        // ...
    }
})();
```

Optionally, you can generate also view along with controller by passing `--view` option.

Generates a controller in `app/assets/app/controllers`.
Generates a view in `app/assets/app/views`.

Example:
```bash
yo nswebangular:controller contactCtrl --view
```

Produces `app/assets/app/controllers/contact.controller.js`:
```javascript
(function () {
    'use strict';

    angular.module('app').controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$scope'];
    
    /* @ngInject */
    function contactCtrl($scope) {
        // ...
    }
})();
```

Produces `app/assets/app/views/contact.html`:
```html
<div>
    <h1 ng-bind="::title"></h1>
</div>
```

### Directive
Generates a directive in `app/assets/app/directives`.

Example:
```bash
yo nswebangular:directive myDirective
```

Produces `app/assets/app/directives/my-directive.directive.js`:
```javascript
(function () {
    'use strict';

    angular.module('app').factory('myDirective', myDirective);

    myDirective.$inject = [];
    
    /* @ngInject */
    function myDirective() {
        /* jshint validthis: true */
        var directive = {
            restrict: 'AE',
            scope: {},
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();
```

### Filter
Generates a filter in `app/assets/app/filters`.

Example:
```bash
yo nswebangular:filter contact
```

Produces `app/assets/app/filters/contact.filter.js`:
```javascript
(function () {
    'use strict';

    angular.module('app').factory('contact', contact);

    function contact() {
        return contactFilter;

        function contactFilter(params) {
            return params;
        }
    }
})();
```

### Service
Generates an AngularJS service (factory) in `app/assets/app/services`.

Example:
```bash
yo nswebangular:service myService
```

Produces `app/assets/app/services/my-service.service.js`:
```javascript
(function () {
    'use strict';

    angular.module('app').factory('myService', myService);

    myService.$inject = [];
    
    /* @ngInject */
    function myService() {
        /* jshint validthis: true */
        var service = {
            activate: _activate
        };

        return service;

        function _activate() {

        }
    }
})();
```

## Application Directory Layout

```
app/                            --> all of the source files for the application
  index.html                    --> the main html template for the application
  favicon.ico                   --> favicon file
  assets/                       --> all app assets
    app/                        --> anugular app related files
      controllers/              --> angular app controllers directory
        about.controller.js     --> about controller logic
        home.controller.js      --> home controller logic
        shell.controller.js     --> shell controller logic
      directives/               --> angular app directives directory
      filters/                  --> angular app filters directory
      services/                 --> angular app services directory
      views/                    --> angular app partial views directory
        about.html              --> about partial view template
        home.html               --> home partial view template
        shell.html              --> shell partial view template
    bower_components/           --> 3rd party libraries managed by bower
    css/                        --> css source files
      style.css                 --> default stylesheet
    fonts/                      --> fonts source files
    images/                     --> images source files
      logo.svg                  --> logo image file
    js/                         --> app JS files
      app.js                    --> main application module
      config.js                 --> config/constant build version
dist/                           --> distributable version of app built using grunt and Gruntfile.js
e2e-tests/                      --> end-to-end tests directory
  specs/                        --> scenarios directory to be run by Protractor
    index.spec.js               --> end-to-end scenarios to be run by Protractor
  protractor.conf.js            --> Protractor config file
node_modules/                   --> npm managed libraries used by grunt
src/                            --> SCSS/SASS files, or other JS files to be used with Grunt's uglify task
unit-tests/                     --> unit tests directory
  specs/                        --> scenarios directory to be run by Karma
    demo.spec.js                --> unit test scenarios to be run by Karma
  karma.conf.js                 --> Karma config file
.bowerrc                        --> bower configuration file
.gitattributes                  --> git attributes file
.gitignore                      --> git ignore config file
.jshintrc                       --> jshintrc config file
.travis.yml                     --> travis ci continuous build config file
.yo-rc.json                     --> yeoman configuration options file
bower.json                      --> package definition manifest for bower
config.json                     --> build configuration file
Gruntfile.js                    --> Grunt build file
package.json                    --> package definition manifest for Node/npm

```