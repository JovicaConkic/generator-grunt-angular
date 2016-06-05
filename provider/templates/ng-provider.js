(function () {
    'use strict';

    angular.module('<%= appName %>').provider('<%= providerName %>', <%= providerName %>);

    function <%= providerName %>() {
        /* jshint validthis: true */
        this.name = 'Default';
        
        this.$get = [function() {
            var name = this.name;
            return {
                sayHello: function() {
                    return 'Hello, ' + name + '!';
                }
            };
        }];

        this.setName = function(name) {
            this.name = name;
        };
    }
})();