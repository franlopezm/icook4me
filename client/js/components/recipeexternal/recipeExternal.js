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
  function recipeExternalCtrl (ApiUsersFact) {
    let vm = this
    vm.addBookmarkExternal = (title, image, publisher, urlExternal) => {
      console.log(title)
      console.log(image)
      console.log(publisher)
      console.log(urlExternal)
    }

    vm.addBookmark = (id) => {
      vm.bookmark = (vm.bookmark === 0) ? 1 : 0
      ApiUsersFact.bookmark(id, vm.bookmark)
    }
  }
})()
