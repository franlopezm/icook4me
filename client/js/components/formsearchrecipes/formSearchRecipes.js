/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('myComponents')
    .component('formSearchRecipes', {
      controller: FormSearchRecipesCtrl,
      controllerAs: 'vm',
      templateUrl: '/js/components/formsearchrecipes/formsearchrecipes.html'
    })

  function FormSearchRecipesCtrl ($location) {
    let vm = this
    vm.searchRecipes = function (e) {
      e.preventDefault()
      $location.url('/search/' + vm.query)
    }
  }
})()
