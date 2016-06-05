(function () {
    'use strict';

    angular.module('<%= appName %>').filter('<%= filterName %>', <%= filterName %>);

    function <%= filterName %>() {
        return <%= filterName %>Filter;

        function <%= filterName %>Filter(params) {
            return params;
        }
    }
})();