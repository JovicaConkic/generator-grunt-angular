(function () {
    'use strict';

    angular.module('<%= appName %>').factory('<%= filterName %>', <%= filterName %>);

    function <%= filterName %>() {
        return <%= filterName %>Filter

        function <%= filterName %>Filter(params) {
            return params;
        }
    }
})();