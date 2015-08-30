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

module.exports = {
  home: loadAsyncDeps(function (done, load) {
    require.ensure(['app/controls/home_ctrl.js'], function () {
      load(require('app/controls/home_ctrl.js'));
      done();
    });
  }),
  games: loadAsyncDeps(function (done, load) {
    require.ensure(['app/controls/game_ctrl.js'], function () {
      load(require('app/controls/game_ctrl.js'));
      done();
    });
  })
};
