'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('nswebangular:app', function() {
    describe('NG app - default test', function() {
        before(function(done) {
            helpers.run(path.join(__dirname, '../app'))
                .withArguments(['MyGeneratedApplication'])
                .withOptions({ skipInstall: true })
                .on('end', done);
        });
        
        it('creates files', function() {
            assert.file([
                'package.json',
                'app/assets/js/app.js',
                '.bowerrc',
                '.gitignore',
                '.jshintrc',
                'bower.json',
                'Gruntfile.js'
            ])
        });
        
        it('adds default ngapp', function() {
            assert.fileContent('app/assets/js/app.js', /angular.module\('app'/);
        });
    });
    
    describe('NG app - Prompt test', function() {
        before(function(done) {
            helpers.run(path.join(__dirname, '../app'))
                .withArguments(['MyGeneratedApplication'])
                .withOptions({ skipInstall: true })
                .withPrompts({ ngappname: 'fooBarApp' })
                .on('end', done);
        });
        
        it('injects custom ngappname', function() {
            assert.fileContent('app/assets/js/app.js', /angular.module\('fooBarApp'/);
            assert.fileContent('app/index.html', /<html ng-app="fooBarApp">/);
            assert.fileContent('app/assets/app/controllers/home.controller.js', /angular.module\('fooBarApp'\).controller\('homeCtrl', homeCtrl\);/);
        });
        
    });
});