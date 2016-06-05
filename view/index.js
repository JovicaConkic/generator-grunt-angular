'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chip = require('chip')();

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        
        this.argument('name', { type: String, required: true });
        chip('View Name (arg): ' + this.name);
    },
    
    writing: function() {
        this.fs.copyTpl(
            this.templatePath('ng-view.html'),
            this.destinationPath('app/assets/app/views/' + _.kebabCase(this.name) + '.html'),
            {
                viewName: _.startCase(this.name)
            }
        )
    }
});