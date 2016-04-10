# generator-grunt-angular
> Yeoman generator for AngularJS projects with GruntJS

generator-grunt-angular is one of the many generators for building a new Angular SPA (Single Page Application) based on 
yeoman generator. It is created as a sum of everything that you can find all over www and which is really necessary and 
helpful to start your work of building Angular application.

## Prerequisites

In order to use this generator-grunt-angular, you'll need to install the latest version of [nodeJS](https://nodejs.org/en/download/). 
Once when you install the latest version of nodeJS, or you already have it, you'll need to install globally following packages using 
node package manager (npm):
* yo
* generator-nswebangular
* grunt
* grunt-cli
* bower

To do so, you can just simply run npm command
```
npm yo generator-nswebangular grunt grunt-cli bower -g install
```

Once you are done with installation of all prerequisites, you'll be good to go to use generator-grunt-angular.

## Usage

Make a new project directory, and cd into it:
```
mkdir 'path/to/the/project/directory' && cd 'path/to/the/project/directory'
```

If you are done with this step, it is time to run and use generator-grunt-angular using following command:
```
yo nswebangular [projectName]
```

for example:
```
yo nswebangular myAngularApp
```
if you want to skip installation of the node and bower dependencies you can use `--skip-install` generator option, 
but this is not required if you running installation for a first time:
```
yo nswebangular myAngularApp --skip-install
```
