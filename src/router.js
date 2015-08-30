module.exports = require('angular').
  module('app.router', [
    require('angular-ui-router'),
    require('oclazyload')
  ]).
  config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      var dependencies = require('app/dependencies.js');

      $stateProvider.
        state('home', {
          url: '/home',
          template: require('app/views/home.html'),
          resolve: dependencies.home
        }).
        state('game', {
          url: '/game',
          template: require('app/views/game.html'),
          resolve: dependencies.games
        });

      $urlRouterProvider.otherwise('/home');
    }
  ]);
