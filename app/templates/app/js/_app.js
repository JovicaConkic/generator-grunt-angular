(function () {
    'use strict';
    var app = angular.module('<%= ngapp %>', [
        'ngAnimate',
        'ngRoute',
        'angular-loading-bar',
        'ui.bootstrap',
        'config'
    ]);

    app.config(['$routeProvider', '$locationProvider', '$httpProvider', configRoutes]);

    function configRoutes($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'assets/app/views/home.html',
                caseInsensitiveMatch: true,
                controller: 'homeCtrl'
            })
            .when('/home', {
                templateUrl: 'assets/app/views/home.html',
                caseInsensitiveMatch: true,
                controller: 'homeCtrl'
            })
            .when('/about', {
                templateUrl: 'assets/app/views/about.html',
                caseInsensitiveMatch: true,
                controller: 'aboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
            
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        
        // Speed up little bit and simple load optimization
        $httpProvider.useApplyAsync(true);
    }

    app.run(['$route', '$rootScope', 'envPackage' , function ($route, $rootScope, envPackage) {
        // Add your functionality for running application
        $rootScope.version = envPackage.version;
        $route.reload();
    }]);
})();