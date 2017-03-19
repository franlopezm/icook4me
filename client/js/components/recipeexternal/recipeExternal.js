(function () {
  'use strict'
  angular
    .module('myComponents')
    .component('recipeExternal', {
      bindings: {
        recipe: '='
      },
      templateUrl: '/js/components/recipeexternal/recipeexternal.html'
    })
})()
