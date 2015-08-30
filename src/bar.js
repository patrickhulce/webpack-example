module.exports = require('angular').
  module('app.bar', [
    require('./foo.js').name
  ]).
  controller('BarCtrl', function ($scope) {
    $scope.data = 'asdfasdf';
  });
