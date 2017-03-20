(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('HomeCtrl', HomeCtrl)

  function HomeCtrl ($rootScope, ApiRecipesFact) {
    $rootScope.section = 'home'
    let vm = this
    let showItems = 18
    vm.aRecipes = []

    ApiRecipesFact.getAllPopAutor()
      .then(data => {
        vm.recipes = data
        vm.showResult = true
      })

    vm.showMoreItems = function (elem) {
      vm.aRecipes.push(...elem.splice(0, showItems))
      if (elem.length === 0) {
        vm.busy = true
      }
    }
  }
})()
