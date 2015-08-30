module.exports = {
  url: '/home',
  template: require('app/views/home.html'),
  resolve: require.asyncDependencies(['app/foo.js'])
};
