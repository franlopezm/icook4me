(function () {
  'use strict'
  angular
    .module('myComponents')
    .component('recipeImg', {
      bindings: {
        recipe: '='
      },
      templateUrl: '/js/components/recipeimg/recipeimg.html'
    })
})()
