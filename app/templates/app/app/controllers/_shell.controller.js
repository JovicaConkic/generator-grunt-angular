(function () {
    'use strict';

    angular.module('<%= ngapp %>').controller('shellCtrl', shellCtrl);

    shellCtrl.$inject = ['$rootScope'];

    function shellCtrl($rootScope) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
