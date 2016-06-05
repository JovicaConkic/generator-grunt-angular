'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chip = require('chip')();

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        
        this.argument('name', { type: String, required: true });
        chip('Controller Name (arg): ' + this.name);
        
        this.option('view', {
            desc: 'Determines if view is created along with controller',
            type: Boolean,
            default: false
        });
    },
    
    writing: function() {
        var fileNameFragment = getFileNameFragment(this.name);
        var formatedName = getFormatedName(this.name);
        
        this.fs.copyTpl(
            this.templatePath('ng-controller.js'),
            this.destinationPath('app/assets/app/controllers/' + fileNameFragment + '.controller.js'),
            {
                ctrlName: _.camelCase(formatedName),
                appName: this.config.get('ngappname'),
                name: _.startCase(fileNameFragment)
            }
        )
        
        if(this.options.view) {
            this.fs.copyTpl(
                this.templatePath('ng-view.html'),
                this.destinationPath('app/assets/app/views/' + fileNameFragment + '.html')
            )
        }
        
        function getFileNameFragment(ctrlName) {
            var ctrlIndex = ctrlName.indexOf('Ctrl');
            if(ctrlIndex === (ctrlName.length - 4)) {
                ctrlName = ctrlName.substring(0, ctrlIndex);
            }
            return _.kebabCase(ctrlName);
        }
        
        function getFormatedName(ctrlName) {
            var ctrlIndex = ctrlName.indexOf('Ctrl');
            if(ctrlIndex < 0 || ctrlIndex !== (ctrlName.length - 4)) {
                ctrlName = ctrlName + 'Ctrl';
            }
            return ctrlName;
        }
    }
});