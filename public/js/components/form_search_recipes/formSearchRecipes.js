/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .component('formSearchRecipes', {
      templateUrl: '/js/components/form_search_recipes/form_search_recipes.html',
      controller: FormSearchRecipesCtrl
    })

  function FormSearchRecipesCtrl ($scope, $location) {
    $scope.searchRecipes = function (e) {
      e.preventDefault()
      $location.url('/search/' + $scope.query)
    }
  }
})()
