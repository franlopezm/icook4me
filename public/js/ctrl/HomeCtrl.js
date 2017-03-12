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
      $rootScope.$broadcast('searchRecipes', $scope.query)
      $scope.showSearch = true
    }
    $scope.returnPage = () => {
      $scope.showSearch = !$scope.showSearch
    }
    $scope.addBookmark = (id) => {
      console.log(id)
    }
    $scope.repeat = [{}, {}, {}, {}, {}, {}, {}]
  }
})()
