'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    chip = require('chip')();

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        
        this.argument('appname', { type: String, required: true });
        
        chip('Application Name (arg): ' + this.appname);
        this.appname = _.kebabCase(this.appname);
    },
    
    initializing: function() {
        this.pkg = {
            name: '<%= pkg.name %>',
            title: '<%= pkg.title %>',
            url: '<%= pkg.url %>',
            author: '<%= pkg.author %>',
            version: '<%= pkg.version %>',
            copyright: '<%= pkg.copyright %>',
            license: '<%= pkg.license %>'
        };
        this.project = {
            src: '<%= project.src %>',
            dist: '<%= project.dist %>',
            dist_src: '<%= project.dist_src %>',
            app: '<%= project.app %>',
            e2e_test: '<%= project.e2e_test %>',
            unit_test: '<%= project.unit_test %>',
            index: '<%= project.index %>',
            assets: '<%= project.assets %>',
            css: '<%= project.css %>',
            js: '<%= project.js %>'
        };
        this.tag = {
            banner: '<%= tag.banner %>'
        };
        this.connect = {
            options: {
                port: '<%= connect.options.port %>'
            }
        };
    },
    prompting: function() {
        this.log(yosay('Welcome to ' + chalk.yellow.bold('NSWD Angular') + ' Generator!\n'));
        
        var done = this.async();
        
        var ngAppNamePrompt = {
            type: 'input',
            name: 'ngappname',
            message: 'Angular Application Name (ng-app)',
            default: this.config.get('ngappname') || 'app'
        };
        
        var dependencyPrompt = {
            type: 'checkbox',
            name: 'dependencies',
            message: 'Which JS Libraries would you like to include?',
            choices: [{
                name: 'lodash: ^4.6.1',
                value: 'lodash',
                checked: true
            },{
                name: 'moment: ^2.12.0',
                value: 'momentjs',
                checked: true
            },{
                name: 'angular-ui-utils: ^3.0.0',
                value: 'angularuiutils',
                checked: true
            }]
        };
        
        var promptArray = [];
        promptArray.push(ngAppNamePrompt);
        
        if(!this.options['skip-install']) {
            promptArray.push(dependencyPrompt);
        }
        
        var callback = function(answers) {
            this.config.set('ngappname', _.camelCase(answers.ngappname));
            this.config.save();
            
            if(!this.options['skip-install']) {
                this.includeLodash = _.includes(answers.dependencies, 'lodash');
                this.includeMoment = _.includes(answers.dependencies, 'momentjs');
                this.includeAngularUIUtils = _.includes(answers.dependencies, 'angularuiutils');
                
                this.log('\n');
                chip('The required libraries will be installed:')
                chip.info('angular: ^1.5.3');
                chip.info('angular-route: ^1.5.3');
                chip.info('angular-animate: ^1.5.3');
                chip.info('angular-mocks: ^1.5.3');
                chip.info('angular-bootstrap: ^1.2.5');
                chip.info('angular-loading-bar: ^0.8.0');
                chip.info('bootstrap-css-only: ^3.3.6\n');
                chip('Additional libraries will be installed:');
                this.includeLodash ? chip.info('lodash: ^4.6.1') : chip.error('lodash: ^4.6.1');
                this.includeMoment ? chip.info('moment: ^2.12.0') : chip.error('moment: ^2.12.0');
                this.includeAngularUIUtils ? chip.info('angular-ui-utils: ^3.0.0\n') : chip.error('angular-ui-utils: ^3.0.0\n');
            }
            done();
        };
        
        this.prompt(promptArray, callback.bind(this));
    },
    configuring: function() {
    },
    writing: {
        gruntfile: function() {
            this.copy('_Gruntfile.js', 'Gruntfile.js'),
            {
                pkg: this.pkg,
                project: this.project,
                tag: this.tag,
                connect: this.connect
            }
            this.copy('jshintrc', '.jshintrc');
        },
        packageJSON: function() {
            this.copy('_package.json', 'package.json');
        },
        configJSON: function() {
            this.copy('_config.json', 'config.json');
        },
        git: function() {
            this.composeWith('common', {
                options: {
                    'skip-messages': true,
                    gitignore: true,
                    gitattributes: true,
                    jshintrc: false,
                    editorconfig: false,
                    'test-jshintrc': false                   
                }
            },
            {
                local: require.resolve('generator-common')
            });
        },
        bower: function() {
            var bowerJson = {
                name: this.appname,
                license: 'MIT',
                dependencies: {},
                devDependencies: {}
            };
            
            bowerJson.dependencies['angular'] = '^1.5.3';
            bowerJson.dependencies['angular-animate'] = '^1.5.3';
            bowerJson.dependencies['angular-bootstrap'] = '^1.2.5';
            bowerJson.dependencies['angular-loading-bar'] = '^0.8.0';
            bowerJson.dependencies['angular-route'] = '^1.5.3';
            bowerJson.dependencies['bootstrap-css-only'] = '^3.3.6';
            bowerJson.devDependencies['angular-mocks'] = '^1.5.3';
            if(this.includeLodash) {
                bowerJson.dependencies['lodash'] = '^4.6.1';
            }
            if(this.includeMoment) {
                bowerJson.dependencies['moment'] = '^2.12.0';
            }
            if(this.includeAngularUIUtils) {
                bowerJson.dependencies['angular-ui-utils'] = '^3.0.0';
            }
            this.fs.writeJSON('bower.json', bowerJson);
            this.copy('bowerrc', '.bowerrc');
        },
        appStaticFiles: function() {
            this.copy('_favicon.ico', 'app/favicon.ico');
            this.directory('app/scss', 'src/scss');
            this.directory('app/css', 'app/assets/css');
            this.directory('app/fonts', 'app/assets/fonts');
            this.directory('app/images', 'app/assets/images');
            this.directory('app/app/directives', 'app/assets/app/directives');
            this.directory('app/app/filters', 'app/assets/app/filters');
            this.directory('app/app/services', 'app/assets/app/services');
        },
        appTestFiles: function() {
            this.directory('app/e2e-tests', 'e2e-tests');
            this.fs.copyTpl(
                this.templatePath('app/unit-tests/_karma.conf.js'),
                this.destinationPath('unit-tests/karma.conf.js')
            );
            this.fs.copyTpl(
                this.templatePath('app/unit-tests/specs/_demo.spec.js'),
                this.destinationPath('unit-tests/specs/demo.spec.js'),
                {
                    ngapp: this.config.get('ngappname')
                }
            );
        },
        scripts: function() {
            this.fs.copyTpl(
                this.templatePath('app/js/_app.js'),
                this.destinationPath('app/assets/js/app.js'),
                {
                    ngapp: this.config.get('ngappname')
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/app/controllers/_shell.controller.js'),
                this.destinationPath('app/assets/app/controllers/shell.controller.js'),
                {
                    ngapp: this.config.get('ngappname')
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/app/controllers/_about.controller.js'),
                this.destinationPath('app/assets/app/controllers/about.controller.js'),
                {
                    ngapp: this.config.get('ngappname')
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/app/controllers/_home.controller.js'),
                this.destinationPath('app/assets/app/controllers/home.controller.js'),
                {
                    ngapp: this.config.get('ngappname')
                }
            );
        },
        html: function() {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('app/index.html'),
                {
                    appname: _.startCase(this.appname),
                    ngapp: this.config.get('ngappname'),
                    currentYear: new Date().getFullYear()>2016 ? ' - ' + new Date().getFullYear() : ''
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/app/views/_shell.html'),
                this.destinationPath('app/assets/app/views/shell.html'),
                {
                    appname: _.startCase(this.appname)
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/app/views/_about.html'),
                this.destinationPath('app/assets/app/views/about.html')
            );
            this.fs.copyTpl(
                this.templatePath('app/app/views/_home.html'),
                this.destinationPath('app/assets/app/views/home.html')
            );
        },
    },
    conflicts: function() {
    },
    install: function() {
        //this.bowerInstall();
        //this.npmInstall();
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },
    end: function() {
        chip(chalk.yellow.bold('Installation successful!\n'));

        var howToInstall =
            'After running ' + chalk.yellow.bold('npm install & bower install') +
            ', enjoy in your work using ' +
            chalk.yellow.bold('NSWD Angular') + 
            ' Generator.';

        if (this.options['skip-install']) {
            chip(howToInstall);
            return;
        }
    }
});