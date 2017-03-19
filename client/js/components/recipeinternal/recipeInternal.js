(function () {
  'use strict'
  angular
    .module('myComponents')
    .component('recipeInternal', {
      bindings: {
        recipe: '='
      },
      templateUrl: '/js/components/recipeinternal/recipeinternal.html'
    })
})()
