'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chip = require('chip')();

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        
        this.argument('name', { type: String, required: true });
        chip('Provider Name (arg): ' + this.name);
    },
    
    writing: function() {
        var fileNameFragment = _.kebabCase(this.name);
        
        this.fs.copyTpl(
            this.templatePath('ng-provider.js'),
            this.destinationPath('app/assets/app/providers/' + fileNameFragment + '.provider.js'),
            {
                providerName: _.camelCase(this.name),
                appName: this.config.get('ngappname')
            }
        )
    }
});