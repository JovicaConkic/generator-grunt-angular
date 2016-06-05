(function () {
    'use strict';

    angular.module('<%= appName %>').directive('<%= directiveName %>', <%= directiveName %>);

    <%= directiveName %>.$inject = [];
    
    /* @ngInject */
    function <%= directiveName %>() {
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