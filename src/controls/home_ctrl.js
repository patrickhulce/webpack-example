module.exports = require('angular').
  module('app.home', []).
  controller('HomeCtrl', function ($scope) {
    $scope.heading = 'Home!';
  });
