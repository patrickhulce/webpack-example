module.exports = require('angular').
  module('app.game', [
    require('./home_ctrl.js').name
  ]).
  controller('GameCtrl', function ($scope) {
    $scope.games = [
      {id: 1},
      {id: 2}
    ];
  });
