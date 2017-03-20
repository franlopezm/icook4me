(function () {
  'use strict'
  angular
    .module('myComponents')
    .component('formSearchRecipes', {
      bindings: {
        value: '='
      },
      controller: FormSearchRecipesCtrl,
      templateUrl: '/js/components/formsearchrecipes/formsearchrecipes.html'
    })

  function FormSearchRecipesCtrl ($location) {
    let ctrl = this
    ctrl.searchRecipes = function (e) {
      e.preventDefault()
      $location.url('/search/' + ctrl.query)
    }
  }
})()
