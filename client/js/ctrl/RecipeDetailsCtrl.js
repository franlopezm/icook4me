/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('RecipeDetailsCtrl', RecipeDetailsCtrl)

  function RecipeDetailsCtrl ($rootScope, $routeParams, ApiRecipesFact, ApiUsersFact) {
    $rootScope.section = ''
    let vm = this
    const id = $routeParams.id

    ApiRecipesFact.getAllRecipe(id)
      .then(data => { vm.recipe = data })

    vm.addBookmark = (recipeId) => {
      vm.bookmark = (vm.bookmark === 0) ? 1 : 0
      ApiUsersFact.bookmark(recipeId, vm.bookmark)
    }
    vm.addLike = (recipeId) => {
      vm.like = (vm.like === 0) ? 1 : 0
      ApiRecipesFact.like(recipeId, vm.like)
      vm.likesRecipe = (vm.like === 1) ? vm.likesRecipe + 1 : vm.likesRecipe - 1
    }
  }
})()
