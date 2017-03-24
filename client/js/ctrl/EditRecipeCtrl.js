(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('EditRecipeCtrl', EditRecipeCtrl)

  function EditRecipeCtrl ($rootScope, ApiRecipesFact, $q, $routeParams, $location, Upload) {
    $rootScope.section = 'add'
    let vm = this
    const id = $routeParams.id

    ApiRecipesFact.getAllRecipe(id)
      .then(data => {
        /* If the recipe does not belong to the user does not allow editing */
        if (data.autor._id === $rootScope.loggedUser.id) {
          vm.title = data.title
          vm.description = data.description
          vm.ingredients = data.ingredients
          vm.steps = data.steps
          vm.imageLink = data.image
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
      let image = vm.imageLink || 'noimage-recipe.jpg'
      if (title.replace(/\s/g, '') !== '' && ingredients.length !== 0 && steps.length !== 0) {
        vm.showMessage = true
        $q.all([ApiRecipesFact.updateRecipe(id, title, image, description, ingredients, steps)])
          .then(([{data}]) => $location.path('/recipe/' + id))
      }
    }

    /* Pressing intro key adds an ingredient or step in the recipe */
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

    /* Upload img to Cloudinary */
    vm.fileSelected = (files) => {
      if (files && files.length) {
        vm.file = files[0]
      }
    }
    vm.uploadFile = function () {
      const url = '/upload'
      const file = vm.file
      Upload.upload({ url, file })
            .success(({imageLink}) => { vm.imageLink = imageLink })
    }
  }
})()
