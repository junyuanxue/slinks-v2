module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'public/**/*.js',
      'test/unit/*.js',
      'node_modules/angular-unit-testing-helpers/test-helpers.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-spec-reporter'
    ],

    reporters: ["spec"],
      specReporter: {
        maxLogLines: 5,         // limit number of lines logged per test
        suppressErrorSummary: true,  // do not print error summary
        suppressFailed: false,  // do not print information about failed tests
        suppressPassed: false,  // do not print information about passed tests
        suppressSkipped: true,  // do not print information about skipped tests
        showSpecTiming: false // print the time elapsed for each spec
      },
  });
};
