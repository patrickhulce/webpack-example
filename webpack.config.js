var webpack = require('webpack');
var path = require('path');
var alias = require('webpack-alias-helper')(__dirname + '/node_modules');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
    vendor: [
      'angular',
      'angular-ui-router',
      'oclazyload'
    ]
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? './dist' : './build',
    publicPath: '/assets/',
    filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      // { test: /\.js$/, loader: 'jshint-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'jscs-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.route\.js$/, loader: 'ng-route-loader' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000' },
      { test: /\.html$/, loader: 'html' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  jscs: {
    preset: 'google',
    disallowSpacesInAnonymousFunctionExpression: false,
    disallowSpacesInFunctionExpression: false,
    requireSpacesInFunctionExpression: {
      beforeOpeningRoundBrace: true
    },
  }
  // resolve: {
  //   alias: alias.modules(['webpack-components'])
  // }
};
