/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('FormSearchCtrl', FormSearchCtrl)

  function FormSearchCtrl ($scope, $rootScope) {
    $scope.searchRecipes = function (e) {
      e.preventDefault()
      $rootScope.$broadcast('searchRecipes', $scope.query)
    }
  }
})()
