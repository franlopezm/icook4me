(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('AddRecipeCtrl', AddRecipeCtrl)

  function AddRecipeCtrl ($scope, $rootScope, ApiRecipesFact, $q, $location) {
    $rootScope.section = 'add'
    $scope.ingredients = []
    $scope.steps = []

    $scope.submitRecipe = (e) => {
      e.preventDefault()
    }

    $scope.addRecipe = (e) => {
      let title = $scope.title
      let description = $scope.description || ''
      let ingredients = $scope.ingredients
      let steps = $scope.steps
      let image = $scope.image || 'noimage-recipe.jpg'
      if (title.replace(/\s/g, '') !== '' && ingredients.length !== 0 && steps.length !== 0) {
        $scope.showMessage = true
        $q.all([ApiRecipesFact.addRecipe(title, image, description, ingredients, steps)])
          .then(([{data}]) => $location.path('/recipe/' + data._id))
      }
    }

    $scope.keyPressAdd = (e) => {
      if (e.keyCode === 13) {
        if (e.target.name === 'ingredient') $scope.addIngredient()
        if (e.target.name === 'step') $scope.addStep()
      }
    }
    $scope.addIngredient = () => {
      let ingredient = $scope.ingredient
      if (ingredient.replace(/\s/g, '') !== '') $scope.ingredients.push(ingredient)
      $scope.ingredient = ''
    }
    $scope.removeIngredient = (index) => {
      $scope.ingredients.splice(index, 1)
    }
    $scope.addStep = () => {
      let step = $scope.step
      if (step.replace(/\s/g, '') !== '') $scope.steps.push(step)
      $scope.step = ''
    }
    $scope.removeStep = (index) => {
      $scope.steps.splice(index, 1)
    }
  }
})()
