'use strict';
/* globals describe, beforeEach, inject, it, expect  */
describe('My Angular Application', function() {
  beforeEach(module('<%= ngapp %>'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Home controller heading title', function() {
    it('Should display the correct title for homeCtrl controller', function() {
      var scope = {};
      var controller = $controller('homeCtrl', { $scope: scope });
      expect(scope.title).toEqual('Home View');
    });
  });
  
  describe('About controller heading title', function() {
    it('Should display the correct title for aboutCtrl controller', function() {
      var scope = {};
      var controller = $controller('aboutCtrl', { $scope: scope });
      expect(scope.title).toEqual('About View');
    });
  });
});