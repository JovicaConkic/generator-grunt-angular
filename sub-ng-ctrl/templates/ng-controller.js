(function () {
    'use strict';

    angular.module('<%= appName %>').controller('<%= ctrlName %>', <%= ctrlName %>);

    <%= ctrlName %>.$inject = [];
    
    /* @ngInject */
    function <%= ctrlName %>() {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        }
    }
})();