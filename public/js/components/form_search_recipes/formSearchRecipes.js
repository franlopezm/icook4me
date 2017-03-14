/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .directive('formSearchRecipes', function () {
      return {
        restrict: 'E',
        controller: FormSearchRecipesCtrl,
        templateUrl: '/js/components/form_search_recipes/form_search_recipes.html'
      }
    })

  function FormSearchRecipesCtrl ($scope, $rootScope, $location) {
    $scope.searchRecipes = function (e) {
      e.preventDefault()
      $location.url('/search/' + $scope.query)
    }
  }
})()
