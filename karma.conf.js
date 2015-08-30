// Karma configuration
// Generated on Sun Aug 30 2015 16:03:37 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'test/**/*_test.js'
    ],
    preprocessors: {
      'test/**/*_test.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    plugins: [
      require('karma-webpack'),
      require('karma-phantomjs-launcher'),
      require('karma-mocha')
    ]
  })
};
