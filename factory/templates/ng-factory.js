(function () {
    'use strict';

    angular.module('<%= appName %>').factory('<%= factoryName %>', <%= factoryName %>);

    <%= factoryName %>.$inject = [];
    
    /* @ngInject */
    function <%= factoryName %>() {
        /* jshint validthis: true */
        var factory = {
            activate: _activate
        };

        return factory;

        function _activate() {

        }
    }
})();