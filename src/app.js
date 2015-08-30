var angular = require('angular');

angular.module('app', [
  require('app/router.js').name
]).controller('MyCtrl', function ($scope) {
  $scope.foo = 'bar';
});

angular.bootstrap(document, ['app']);
