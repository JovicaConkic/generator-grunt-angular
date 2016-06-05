'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chip = require('chip')();

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        
        this.argument('name', { type: String, required: true });
        chip('Factory Name (arg): ' + this.name);
    },
    
    writing: function() {
        var fileNameFragment = _.kebabCase(this.name);
        
        this.fs.copyTpl(
            this.templatePath('ng-factory.js'),
            this.destinationPath('app/assets/app/factories/' + fileNameFragment + '.factory.js'),
            {
                factoryName: _.camelCase(this.name),
                appName: this.config.get('ngappname')
            }
        )
    }
});