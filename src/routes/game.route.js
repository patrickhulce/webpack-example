module.exports = function (loadAsyncDeps) {
  return {
    url: '/game',
    template: require('app/views/game.html'),
    resolve: loadAsyncDeps(function (done, load) {
      require.ensure(['app/foo.js', 'app/bar.js'], function () {
        load(require('app/foo.js'));
        load(require('app/bar.js'));
        done();
      });
    })
  };
};
