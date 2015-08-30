var webpack = require('webpack');
var path = require('path');
var alias = require('webpack-alias-helper')(__dirname + '/node_modules');

var isProduction = process.env.NODE_ENV === 'production';
var minify = new webpack.optimize.UglifyJsPlugin({
  compress: {warnings: false}
});

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
    path: isProduction ? './dist' : './build',
    publicPath: '/assets/',
    filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'jscs-loader!jshint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000' },
      { test: /\.html$/, loader: 'html' },
      { test: /ng-route-loader/, loader: 'imports?require=false'  }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ].concat(isProduction ? [minify] : []),
  jscs: {
    preset: 'google',
    disallowSpacesInAnonymousFunctionExpression: false,
    disallowSpacesInFunctionExpression: false,
    requireSpacesInFunctionExpression: {
      beforeOpeningRoundBrace: true
    },
  },
  jshint: {
    quotmark: 'single',
    undef: true
  },
  // resolve: {
  //   alias: alias.modules(['webpack-components'])
  // }
};
