/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .component('formSearchRecipes', {
      controller: FormSearchRecipesCtrl,
      controllerAs: 'vm',
      templateUrl: '/js/components/form_search_recipes/form_search_recipes.html'
    })

  function FormSearchRecipesCtrl ($location) {
    let vm = this
    vm.searchRecipes = function (e) {
      e.preventDefault()
      $location.url('/search/' + vm.query)
    }
  }
})()
