'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chip = require('chip')();

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        
        this.argument('name', { type: String, required: true });
        chip('Filter Name (arg): ' + this.name);
    },
    
    writing: function() {
        var fileNameFragment = _.kebabCase(this.name);
        
        this.fs.copyTpl(
            this.templatePath('ng-filter.js'),
            this.destinationPath('app/assets/app/filters/' + fileNameFragment + '.filter.js'),
            {
                filterName: _.camelCase(this.name),
                appName: this.config.get('ngappname')
            }
        )
    }
});