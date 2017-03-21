(function () {
  'use strict'
  angular
    .module('myComponents')
    .component('recipeExternal', {
      bindings: {
        recipe: '='
      },
      controller: recipeExternalCtrl,
      templateUrl: '/js/components/recipeexternal/recipeexternal.html'
    })
  function recipeExternalCtrl (ApiUsersFact, ApiRecipesFact) {
    let vm = this
    vm.addBookmark = (recipe) => {
      vm.bookmark = (vm.bookmark === 0) ? 1 : 0
      const {_id = '', title, image, publisher, urlExternal} = recipe
      if (_id !== '') {
        ApiUsersFact.bookmark(_id, vm.bookmark)
      } else {
        ApiRecipesFact.addExternal(title, image, publisher, urlExternal)
        .then(data => {
          ApiUsersFact.bookmark(data._id, vm.bookmark)
        })
      }
    }
  }
})()
