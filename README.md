# generator-nswebangular [![Build Status](https://secure.travis-ci.org/JovicaConkic/generator-nswebangular.svg?branch=master)](http://travis-ci.org/JovicaConkic/generator-nswebangular) [![Dependency Status](https://david-dm.org/JovicaConkic/generator-nswebangular.svg)](https://david-dm.org/JovicaConkic/generator-nswebangular) [![devDependency Status](https://david-dm.org/JovicaConkic/generator-nswebangular/dev-status.svg)](https://david-dm.org/JovicaConkic/generator-nswebangular#info=devDependencies) [![npm version](https://badge.fury.io/js/generator-nswebangular.svg)](https://badge.fury.io/js/generator-nswebangular)
> Yeoman generator for AngularJS projects with GruntJS

generator-nswebangular is yeoman based generator for building a new Angular SPA (Single Page Application). It is created as a sum of everything that you can find all over www and which is really necessary and 
helpful to start your work of building Angular application.

## Prerequisites

In order to use this generator-nswebangular, you'll need to install the latest version of [nodeJS](https://nodejs.org/en/download/) and for Windows users [Ruby](http://rubyinstaller.org/downloads/). 
Once when you install the latest version of nodeJS, or you already have it, you'll need to install globally following packages using 
node package manager (npm):
* yo
* generator-nswebangular
* grunt
* grunt-cli
* bower

To do so, you can just simply run npm command
```
npm install -g yo generator-nswebangular grunt grunt-cli bower
```

Once when you install Ruby or you already have it, you'll need to install following ruby gems (required for Grunt tasks):
* sass
* compass

To do so, you can just simply run command
```
gem install sass compass
```

Once you are done with installation of all prerequisites, you'll be good to go to use generator-nswebangular.

## Usage

Make a new project directory, and cd into it:
```
mkdir 'path/to/the/project/directory' && cd 'path/to/the/project/directory'
```

If you are done with this step, it is time to run and use generator-nswebangular using following command:
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
* [nswebangular:factory](#factory)
* [nswebangular:provider](#provider)
* [nswebangular:service](#service)
* [nswebangular:view](#view)

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
yo nswebangular:controller contact
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

    angular.module('app').directive('myDirective', myDirective);

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

    angular.module('app').filter('contact', contact);

    function contact() {
        return contactFilter;

        function contactFilter(params) {
            return params;
        }
    }
})();
```

### Factory
Generates an AngularJS factory in `app/assets/app/factories`.

Example:
```bash
yo nswebangular:factory myFactory
```

Produces `app/assets/app/factories/my-factory.factory.js`:
```javascript
(function () {
    'use strict';

    angular.module('app').factory('myFactory', myFactory);

    myFactory.$inject = [];
    
    /* @ngInject */
    function myFactory() {
        /* jshint validthis: true */
        var factory = {
            activate: _activate
        };

        return factory;

        function _activate() {

        }
    }
})();
```

### Provider
Generates an AngularJS provider in `app/assets/app/providers`.

Example:
```bash
yo nswebangular:provider myProvider
```

Produces `app/assets/app/providers/my-provider.provider.js`:
```javascript
(function () {
    'use strict';

    angular.module('app').provider('myProvider', myProvider);
    
    function myProvider() {
        /* jshint validthis: true */
        this.name = 'Default';
        
        this.$get = [function() {
            var name = this.name;
            return {
                sayHello: function() {
                    return 'Hello, ' + name + '!';
                }
            };
        }];

        this.setName = function(name) {
            this.name = name;
        };
    }
})();
```

### Service
Generates an AngularJS service in `app/assets/app/services`.

Example:
```bash
yo nswebangular:service myService
```

Produces `app/assets/app/services/my-service.service.js`:
```javascript
(function () {
    'use strict';

    angular.module('app').service('myService', myService);

    myService.$inject = [];
    
    /* @ngInject */
    function myService() {
        /* jshint validthis: true */
        this.activate = function() {

        };
    }
})();
```

### View
Generates a view in `app/assets/app/views`.

Example:
```bash
yo nswebangular:view myView
```

Produces `app/assets/app/views/my-view.html`:
```html
<div>
    <h1>myView</h1>
</div>
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
      factories/                --> angular app factories directory
      filters/                  --> angular app filters directory
      providers/                --> angular app providers directory
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
src/                            --> source directory used as SCSS/SASS compiling source
  scss/                         --> SCSS/SASS directory
    mixins/                     --> mixins
    modules/                    --> common modules
    partials/                   --> partials
    vendor/                     --> CSS or Sass from other projects
    style.scss                  --> primary Sass file
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

## Gruntfile.js & Grunt tasks

Gruntfile.js contains following main grunt tasks:

* [grunt](#grunt) or [grunt default](#grunt)
* [grunt build](#grunt-build)
* [grunt test](#grunt-test)

### Grunt
Grunt default task runner.

Example:
```bash
grunt
```
or
```bash
grunt default
```

Grunt default snippet:
```javascript
grunt.registerTask('default', [
    'sass:dev',
    'ngconstant:dev',
    'jshint',
    'injector:dev',
    'injector:bower',
    'connect:livereload',
    'open',
    'karma:continuous:start',
    'watch'
  ]);
```

Grunt default task contains following grunt sub-tasks:
* [sass:dev](https://github.com/gruntjs/grunt-contrib-sass) - SCSS/SASS compiler for development (expanded CSS style)
* [ngconstant:dev](https://github.com/werk85/grunt-ng-constant) - Used to create angular constant/config file(development build version)
* [jshint](https://github.com/gruntjs/grunt-contrib-jshint) - JSHint
* [injector:dev](https://github.com/klei/grunt-injector) - Inject references (js files and stylesheets) into a html file
* [injector:bower](https://github.com/klei/grunt-injector) - Inject bower references into a html file
* [connect:livereload](https://github.com/gruntjs/grunt-contrib-connect) - Starts a local webserver with rewrite rules and livereload
* [open](https://github.com/jsoverson/grunt-open) - Open the webserver in the browser
* [karma:continuous:start](https://github.com/karma-runner/grunt-karma) - Starts karma server for watch task
* [watch](https://github.com/gruntjs/grunt-contrib-watch) - Watching development files and run compile tasks

### Grunt Build
Grunt build task runner. Running tests, applying new build version, copy, minify application files into dist directory, adding file revisions and perform content optimization for distribution.

Example:
```bash
grunt build
```

Grunt build snippet:
```javascript
grunt.registerTask('build', [
    'clean',
    'bump-only:'+ version,
    'sass:dist',
    'test',
    'copy',
    'jshint',
    'ngconstant:dist',
    'uglify',
    'filerev:dist',
    'injector:dist',
    'injector:bower',
    'imagemin:dist',
    'htmlmin:dist'
  ]);
```

Grunt build task contains following grunt sub-tasks:
* [clean](https://github.com/gruntjs/grunt-contrib-clean) - Cleans distribution (dist) files and folders
* [bump-only:patch](https://github.com/vojtajina/grunt-bump) - Bump package version (patch by default) for distribution and updates config.json and package.json version
* [sass:dist](https://github.com/gruntjs/grunt-contrib-sass) - SCSS/SASS compiler for distribution (compressed CSS)
* [test](#grunt-test) - Runs grunt test task
* [copy](https://github.com/gruntjs/grunt-contrib-copy) - Copy app files and folders in dist directory
* [jshint](https://github.com/gruntjs/grunt-contrib-jshint) - JSHint
* [ngconstant:dist](https://github.com/werk85/grunt-ng-constant) - Used to create angular constant/config file (distribution build version)
* [uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Compresses and minifies all JavaScript files
* [filerev:dist](https://github.com/yeoman/grunt-filerev) - Static asset revisioning through file content hash
* [injector:dist](https://github.com/klei/grunt-injector) - Inject references (js files and stylesheets) into a html file for distribution
* [injector:bower](https://github.com/klei/grunt-injector) - Inject bower references into a html file for distribution
* [imagemin:dist](https://github.com/gruntjs/grunt-contrib-imagemin) - Compresses and minify images
* [htmlmin:dist](https://github.com/gruntjs/grunt-contrib-htmlmin) - Minify HTML

Grunt build task can take a option `--semver`. By default this option is included and its value is `--semver=patch`. This option will tell bump grunt task which version application will have. This option could have following values: patch, minor, major, prepatch, preminor, premajor, prerelease  etc. More about these values you can check out [here](https://github.com/vojtajina/grunt-bump).

Build with minor updated version example:
```bash
grunt build --semver=minor
```

### Grunt Test
Grunt test task runner.

Example:
```bash
grunt test
```

Grunt test snippet:
```javascript
grunt.registerTask('test', [
    'shell:protractor_update',
    'jshint',
	'connect:test',
	'protractor:e2e',
    'karma:unit'
  ]);
```

Grunt test task contains following grunt sub-tasks:
* [shell:protractor_update](https://github.com/sindresorhus/grunt-shell) - Shell command to update webdriver-manager
* [jshint](https://github.com/gruntjs/grunt-contrib-jshint) - JSHint
* [connect:test](https://github.com/gruntjs/grunt-contrib-connect) - Starts a local webserver with rewrite rules for testing purpose
* [protractor:e2e](https://github.com/teerapap/grunt-protractor-runner) - Runs protractor's end-to-end tasks
* [karma:unit](https://github.com/karma-runner/grunt-karma) - Runs karma unit test

## Testing

Grunt test task runs two types of testing:

* [Unit Tests](#unit-tests)
* [End-to-end Tests](#end-to-end-tests)

### Unit Tests

[Karma](http://karma-runner.github.io/) is JavaScript command line tool which is used to runs unit test by using [Jasmine](http://jasmine.github.io/1.3/introduction.html) test framework and [angular-mocks](https://docs.angularjs.org/api/ngMock). To use Jasmine with Karma, we use the [karma-jasmine](https://github.com/karma-runner/karma-jasmine) test runner. Browsers that are used for unit tests are: Chrome, Firefox or PhantomJS.

```
unit-tests/                     --> unit tests directory
  specs/                        --> scenarios directory to be run by Karma
    demo.spec.js                --> unit test scenarios to be run by Karma
  karma.conf.js                 --> Karma config file
```

### End-to-end Tests

[Protractor](http://angular.github.io/protractor/) is an end-to-end test framework for AngularJS applications. Protractor is using web-drivers to start Java Selenium server and using [Jasmine](http://jasmine.github.io/1.3/introduction.html) test framework runs the test against application. Protractor can use Chrome or Firefox (or other) browsers to perform e2e tests which could be set in `protractor.conf.js` file.

```
e2e-tests/                      --> end-to-end tests directory
  specs/                        --> scenarios directory to be run by Protractor
    index.spec.js               --> end-to-end scenarios to be run by Protractor
  protractor.conf.js            --> Protractor config file
```

## Continuous Integration

### Travis CI

[Travis CI](https://travis-ci.org/) is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The generator-nswebangular and also generated angular application
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

## Changelog

Recent changes can be viewed on Github on the [Releases Page](https://github.com/JovicaConkic/generator-nswebangular/releases)

## License

[ISC license](https://opensource.org/licenses/ISC)
