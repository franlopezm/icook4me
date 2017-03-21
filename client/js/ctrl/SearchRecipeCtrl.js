/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('SearchRecipeCtrl', SearchRecipeCtrl)

  function SearchRecipeCtrl ($scope, $q, $rootScope, $routeParams, ProxyRecipesFact, $location, $anchorScroll, ApiRecipesFact) {
    $rootScope.section = 'home'
    let {query} = $routeParams
    $rootScope.queryFood = query
    $scope.showNoResult = false
    $scope.aRecipes = []
    let pagesShown = 1
    let pageSize = 12

    $q.all([
      ProxyRecipesFact.searchFood2fork(query),
      ProxyRecipesFact.searchEdamam(query),
      ApiRecipesFact.searchRecipes(query)
    ]).then(data => {
      let recipes = [...data[0], ...data[1], ...data[2]]
      if (recipes.length === 0) {
        $scope.showNoResult = true
      } else {
        $scope.showNoResult = true
      }
      $location.hash('top')
      $anchorScroll()
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
      ProxyRecipesFact.searchFood2fork(query, page)
        .then(recipes => {
          $scope.aRecipes.push(...recipes)
        })
      ProxyRecipesFact.searchEdamam(query, page)
        .then(recipes => {
          $scope.aRecipes.push(...recipes)
        })
      pagesShown = page
    }
  }
})()
