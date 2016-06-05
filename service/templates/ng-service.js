(function () {
    'use strict';

    angular.module('<%= appName %>').service('<%= serviceName %>', <%= serviceName %>);

    <%= serviceName %>.$inject = [];
    
    /* @ngInject */
    function <%= serviceName %>() {
        /* jshint validthis: true */
        this.activate = function() {

        };
    }
})();