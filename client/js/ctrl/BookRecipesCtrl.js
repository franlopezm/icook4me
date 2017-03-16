/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('BookRecipesCtrl', BookRecipesCtrl)

  function BookRecipesCtrl ($scope, $rootScope) {
    $rootScope.section = 'bookrecipes'
    $scope.repeat = [{}, {}, {}, {}, {}, {}, {}]
  }
})()
