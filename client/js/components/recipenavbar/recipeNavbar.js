(function () {
  'use strict'
  angular
    .module('myComponents')
    .component('recipeNavbar', {
      bindings: {
        recipe: '<'
      },
      controller: recipeNavbarCtrl,
      templateUrl: '/js/components/recipenavbar/recipenavbar.html'
    })

  function recipeNavbarCtrl () {
    let vm = this
    vm.addBookmarkExternal = (title, image, autor, urlExternal) => {
      console.log(title)
      console.log(image)
      console.log(autor)
      console.log(urlExternal)
    }
    vm.addBookmark = (id) => {
      console.log(id)
    }
    vm.addLike = (id) => {
      console.log(id)
    }
  }
})()
