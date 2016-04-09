(function () {
    'use strict';

    angular.module('<%= appName %>').controller('<%= ctrlName %>', <%= ctrlName %>);

    <%= ctrlName %>.$inject = ['$scope'];
    
    /* @ngInject */
    function <%= ctrlName %>($scope) {
        /* jshint validthis: true */
        var vm = this;
        $scope.title = '<%= name %> View';

        activate();

        function activate() {
        }
    }
})();