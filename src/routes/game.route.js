module.exports = {
  url: '/game',
  template: require('app/views/game.html'),
  resolve: require.asyncDependencies(['app/foo.js', 'app/bar.js'])
};
