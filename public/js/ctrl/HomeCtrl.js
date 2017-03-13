/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('HomeCtrl', HomeCtrl)

  function HomeCtrl ($scope, $rootScope) {
    $rootScope.section = 'home'
    $scope.searchRecipes = function (e) {
      e.preventDefault()
      $rootScope.foodSearch = $scope.query
      $rootScope.$broadcast('searchRecipes', $scope.query)
      $rootScope.showSearch = true
    }
    $scope.returnPage = () => {
      $rootScope.showSearch = !$rootScope.showSearch
    }
    $scope.addBookmark = (id) => {
      console.log(id)
    }
    $scope.repeat = [{}, {}, {}, {}, {}, {}, {}]
  }
})()
