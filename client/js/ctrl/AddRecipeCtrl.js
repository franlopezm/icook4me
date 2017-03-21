(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('AddRecipeCtrl', AddRecipeCtrl)

  function AddRecipeCtrl ($rootScope, ApiRecipesFact, $q, $location) {
    $rootScope.section = 'add'
    let vm = this
    vm.ingredients = []
    vm.steps = []

    vm.submitRecipe = (e) => {
      e.preventDefault()
    }

    vm.addRecipe = (e) => {
      let title = vm.title
      let description = vm.description || ''
      let ingredients = vm.ingredients
      let steps = vm.steps
      let image = vm.image || 'noimage-recipe.jpg'
      if (title.replace(/\s/g, '') !== '' && ingredients.length !== 0 && steps.length !== 0) {
        vm.showMessage = true
        $q.all([ApiRecipesFact.addRecipe(title, image, description, ingredients, steps)])
          .then(([{data}]) => $location.path('/recipe/' + data._id))
      }
    }

    vm.keyPressAdd = (e) => {
      if (e.keyCode === 13) {
        if (e.target.name === 'ingredient') vm.addIngredient()
        if (e.target.name === 'step') vm.addStep()
      }
    }
    vm.addIngredient = () => {
      let ingredient = vm.ingredient
      if (ingredient.replace(/\s/g, '') !== '') vm.ingredients.push(ingredient)
      vm.ingredient = ''
    }
    vm.removeIngredient = (index) => {
      vm.ingredients.splice(index, 1)
    }
    vm.addStep = () => {
      let step = vm.step
      if (step.replace(/\s/g, '') !== '') vm.steps.push(step)
      vm.step = ''
    }
    vm.removeStep = (index) => {
      vm.steps.splice(index, 1)
    }
  }
})()
