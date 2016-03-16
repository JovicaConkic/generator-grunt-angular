'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        
        this.argument('name', { type: String, required: true });
        this.log('name (arg): ' + this.name);
        
        console.log('Inisde sub-ng-ctrl sub-generator', this.name);
        
        this.option('view', {
            desc: 'Determines if view is created along with controller',
            type: Boolean,
            default: false
        });
    },
    
    writing: function() {
        var fileNameFragment = getFileNameFragment(this.name);
        
        this.fs.copyTpl(
            this.templatePath('ng-controller.js'),
            this.destinationPath('src/app/' + fileNameFragment + '/' + fileNameFragment + '.controller.js'),
            {
                ctrlName: _.camelCase(this.name),
                appName: this.config.get('ngappname')
            }
        )
        
        if(this.options.view) {
            this.fs.copyTpl(
                this.templatePath('ng-view.html'),
                this.destinationPath('src/app/' + fileNameFragment + '/' + fileNameFragment + '.html'),
                {
                    name: this.name
                }
            )
        }
        
        function getFileNameFragment(ctrlName) {
            var ctrlIndex = ctrlName.indexOf('Ctrl');
            if(ctrlIndex === (ctrlName.length - 4)) {
                ctrlName = ctrlName.substring(0, ctrlIndex);
            }
            return _.kebabCase(ctrlName);
        }
    }
});