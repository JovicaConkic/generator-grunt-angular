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

* [nswebangular](#app))
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
        return contactFilter

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
