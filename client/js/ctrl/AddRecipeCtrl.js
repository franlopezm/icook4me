/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('AddRecipeCtrl', AddRecipeCtrl)

  function AddRecipeCtrl ($scope, $rootScope) {
    $rootScope.section = 'add'
    $scope.ingredients = []
    $scope.preparation = []

    $scope.saveRecipe = (e) => {
      e.preventDefault()
      console.log($scope.title)
      console.log($scope.ingredients)
      console.log($scope.preparation)
    }
    $scope.addRecipe = (e) => {
      e.preventDefault()
      console.log(e)
    }

    $scope.keyPressAdd = (e) => {
      if (e.keyCode === 13) {
        if (e.target.name === 'ingredient') $scope.addIngredient()
        if (e.target.name === 'preparation') $scope.addStep()
      }
    }
    $scope.addIngredient = () => {
      $scope.ingredients.push($scope.ingredient)
      $scope.ingredient = ''
    }
    $scope.removeIngredient = (index) => {
      $scope.ingredients.splice(index, 1)
    }
    $scope.addStep = () => {
      $scope.preparation.push($scope.step)
      $scope.step = ''
    }
    $scope.removeStep = (index) => {
      $scope.preparation.splice(index, 1)
    }
  }
})()
