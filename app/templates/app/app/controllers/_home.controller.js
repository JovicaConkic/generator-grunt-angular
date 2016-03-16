(function () {
    'use strict';

    angular.module('<%= ngapp %>').controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = [];
    
    /* @ngInject */
    function homeCtrl() {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        }
    }
})();