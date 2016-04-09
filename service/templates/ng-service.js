(function () {
    'use strict';

    angular.module('<%= appName %>').factory('<%= factoryName %>', <%= factoryName %>);

    <%= factoryName %>.$inject = [];
    
    /* @ngInject */
    function <%= factoryName %>() {
        /* jshint validthis: true */
        var service = {
            activate: _activate
        };

        return service;

        function _activate() {

        }
    }
})();