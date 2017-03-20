(function () {
  'use strict'
  angular
    .module('myComponents')
    .component('recipeInternal', {
      bindings: {
        recipe: '='
      },
      controller: recipeInternalCtrl,
      templateUrl: '/js/components/recipeinternal/recipeinternal.html'
    })

  function recipeInternalCtrl (ApiRecipesFact, ApiUsersFact) {
    let vm = this
    vm.addBookmark = (id) => {
      vm.bookmark = (vm.bookmark === 0) ? 1 : 0
      ApiUsersFact.bookmark(id, vm.bookmark)
    }
    vm.addLike = (id) => {
      vm.like = (vm.like === 0) ? 1 : 0
      ApiRecipesFact.like(id, vm.like)
      vm.likesRecipe = (vm.like === 1) ? vm.likesRecipe + 1 : vm.likesRecipe - 1
    }
  }
})()
