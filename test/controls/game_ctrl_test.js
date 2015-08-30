var angular = require('angular');
var ngMock = require('angular-mocks') && angular.mock;
var should = require('should');

describe('GameCtrl', function () {
  var scope, ctrl;

  beforeEach(ngMock.module(require('app/controls/game_ctrl').name));

  beforeEach(ngMock.inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('GameCtrl', {$scope: scope});
  }));

  it('should initialize games', function () {
    (scope.games.length).should.equal(2);
  });

  it('should initialize games element', function () {
    (scope.games[0]).should.deepEqual({id: 1});
  });
});
