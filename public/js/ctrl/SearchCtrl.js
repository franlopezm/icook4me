/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('SearchCtrl', SearchCtrl)

  function SearchCtrl ($scope, $rootScope, ExternalRecipesFact) {
    $rootScope.section = 'search'

    $scope.addBookmark = (id) => {
      console.log(id)
    }

    $scope.$on('searchRecipes', function (event, query) {
      $scope.recipes = []
      ExternalRecipesFact.searchFood2fork(query)
      .then(recipes => {
        $scope.recipes.unshift(...recipes)
      })
      ExternalRecipesFact.edamam(query)
      .then(recipes => {
        $scope.recipes.unshift(...recipes)
        console.log($scope.recipes)
      })
    })
  }
})()
