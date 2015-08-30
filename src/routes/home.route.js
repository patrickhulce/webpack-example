module.exports = function (loadAsyncDeps) {
  return {
    url: '/home',
    template: require('app/views/home.html'),
    resolve: loadAsyncDeps(function (done, load) {
      require.ensure(['app/foo.js'], function () {
        load(require('app/foo.js'));
        done();
      });
    })
  };
};
