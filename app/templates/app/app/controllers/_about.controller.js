(function () {
    'use strict';

    angular.module('<%= ngapp %>').controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = [];
    
    /* @ngInject */
    function aboutCtrl() {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        }
    }
})();