(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('HomeCtrl', HomeCtrl)

  function HomeCtrl ($rootScope, ApiRecipesFact) {
    $rootScope.section = 'home'
    let vm = this
    ApiRecipesFact.getAllPopAutor()
      .then(data => vm.recipes = data)

    vm.showMoreItems = function () {
      vm.showNoResult = true
      let page = pagesShown + 1
      ProxyRecipesFact.searchFood2fork(query, page)
        .then(recipes => {
          vm.aRecipes.push(...recipes)
        })
      ProxyRecipesFact.searchEdamam(query, page)
        .then(recipes => {
          vm.aRecipes.push(...recipes)
        })
      pagesShown = page
    }
  }
})()
