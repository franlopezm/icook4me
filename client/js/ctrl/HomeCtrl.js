(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('HomeCtrl', HomeCtrl)

  function HomeCtrl ($rootScope, ApiRecipesFact) {
    $rootScope.section = 'home'
    let vm = this
    const showItems = 18
    let page = 1

    ApiRecipesFact.getAllPopAutor()
      .then(data => {
        vm.recipes = data
        vm.showResult = true
      })

    vm.showMoreItems = function () {
      vm.limitation = showItems * page
      let result = vm.recipes.length / showItems
      if (result < page) {
        vm.busy = true
      }
      page = page + 1
    }
  }
})()
