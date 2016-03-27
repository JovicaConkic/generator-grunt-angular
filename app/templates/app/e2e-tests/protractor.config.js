exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'scenarious/**/*.js'
  ],
  
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],

  baseUrl: 'http://localhost:9000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};