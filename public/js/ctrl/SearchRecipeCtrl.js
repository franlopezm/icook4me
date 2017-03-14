/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('SearchRecipeCtrl', SearchRecipeCtrl)

  function SearchRecipeCtrl ($scope, $rootScope, $routeParams, ExternalRecipesFact, $location) {
    let {query} = $routeParams
    $rootScope.queryFood = query
    // pagination functionality
    let pagesShown = 1
    let pageSize = 12

    $scope.aRecipes = ExternalRecipesFact.allRecipes(query)

    // Pagination functionality
    $scope.paginationLimit = function () {
      return pageSize * pagesShown
    }
    $scope.hasMoreItemsToShow = (num) => {
      return pagesShown > (num / pageSize)
    }
    $scope.showMoreItems = function () {
      let page = pagesShown + 1
      ExternalRecipesFact.searchFood2fork(query, page)
        .then(recipes => {
          $scope.aRecipes.push(...recipes)
        })
      ExternalRecipesFact.searchEdamam(query, page)
        .then(recipes => {
          $scope.aRecipes.push(...recipes)
        })
      pagesShown = page
    }
  }
})()
