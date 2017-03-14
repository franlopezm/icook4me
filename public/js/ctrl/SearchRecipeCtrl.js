/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('SearchRecipeCtrl', SearchRecipeCtrl)

  function SearchRecipeCtrl ($scope, $q, $rootScope, $routeParams, ExternalRecipesFact, $location) {
    $rootScope.section = 'home'
    let {query} = $routeParams
    $rootScope.queryFood = query
    $scope.showNoResult = false
    $scope.aRecipes = []
    let pagesShown = 1
    let pageSize = 12

    $q.all([
      ExternalRecipesFact.searchFood2fork(query),
      ExternalRecipesFact.searchEdamam(query)
    ]).then(data => {
      let recipes = [...data[0], ...data[1]]
      if (recipes.length === 0) {
        $scope.showNoResult = true
      }
      $scope.aRecipes.push(...recipes)
    })

    // Pagination functionality
    $scope.paginationLimit = function () {
      return pageSize * pagesShown
    }
    $scope.hasMoreItemsToShow = (num) => {
      return pagesShown > (num / pageSize)
    }
    $scope.showMoreItems = function () {
      $scope.showNoResult = true
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
