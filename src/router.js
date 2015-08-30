module.exports = require('angular').
  module('app.router', [
    require('angular-ui-router'),
    require('oclazyload')
  ]).
  config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider.
        state('home', require('app/routes/home.route.js')).
        state('game', require('app/routes/game.route.js'));

      $urlRouterProvider.otherwise('/home');
    }
  ]);
