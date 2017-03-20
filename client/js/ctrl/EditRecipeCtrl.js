(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('EditRecipeCtrl', EditRecipeCtrl)

  function EditRecipeCtrl ($rootScope, ApiRecipesFact, $q, $routeParams, $location) {
    $rootScope.section = 'add'
    let vm = this
    const id = $routeParams.id

    ApiRecipesFact.getAllRecipe(id)
      .then(data => {
        if (data.autor._id === $rootScope.loggedUser.id) {
          vm.title = data.title
          vm.description = data.description
          vm.ingredients = data.ingredients
          vm.steps = data.steps
          vm.image = data.image
        } else {
          $location.path('/')
        }
      })
      .catch(err => $location.path('/'))

    vm.submitRecipe = (e) => {
      e.preventDefault()
    }

    vm.updateRecipe = (e) => {
      let title = vm.title
      let description = vm.description || ''
      let ingredients = vm.ingredients
      let steps = vm.steps
      let image = vm.image || 'noimage-recipe.jpg'
      if (title.replace(/\s/g, '') !== '' && ingredients.length !== 0 && steps.length !== 0) {
        vm.showMessage = true
        $q.all([ApiRecipesFact.updateRecipe(id, title, image, description, ingredients, steps)])
          .then(([{data}]) => $location.path('/recipe/' + id))
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
