function loadAsyncDeps(dependencies, loadAll) {
  return {
    deps: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
      var deferred = $q.defer();
      dependencies(function () {
        deferred.resolve();
      }, function (moduleDef) {
        $ocLazyLoad.load({name: moduleDef.name});
      });
      return deferred.promise;
    }]
  };
}

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
        state('home', require('app/routes/home.route.js')(loadAsyncDeps)).
        state('game', require('app/routes/game.route.js')(loadAsyncDeps));

      $urlRouterProvider.otherwise('/home');
    }
  ]);
