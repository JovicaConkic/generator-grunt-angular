(function () {
    'use strict';

    angular.module('<%= ngapp %>').controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope'];
    
    /* @ngInject */
    function homeCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;
        $scope.title = 'Home View';

        activate();

        function activate() {
        }
    }
})();