(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('SearchRecipeCtrl', SearchRecipeCtrl)

  function SearchRecipeCtrl ($q, $rootScope, $routeParams, ProxyRecipesFact, $location, $anchorScroll, ApiRecipesFact) {
    $rootScope.section = 'search'
    let {query} = $routeParams
    $rootScope.queryFood = query
    let vm = this
    let pagesShown = 1
    let pageSize = 12
    vm.showNoResult = true

    $q.all([
      ProxyRecipesFact.searchFood2fork(query),
      ProxyRecipesFact.searchEdamam(query),
      ApiRecipesFact.searchRecipes(query)
    ]).then(data => {
      let recipes = [...data[0], ...data[1], ...data[2]]
      vm.showNoResult = false
      if (recipes.length === 0) {
        vm.notFound = true
      }
      $location.hash('top')
      $anchorScroll()
      vm.aRecipes = recipes
    })

    // Pagination functionality
    vm.paginationLimit = function () {
      return pageSize * pagesShown
    }
    vm.hasMoreItemsToShow = (num) => {
      return pagesShown > (num / pageSize)
    }
    vm.showMoreItems = function () {
      let page = pagesShown + 1
      $q.all([
        ProxyRecipesFact.searchFood2fork(query, page),
        ProxyRecipesFact.searchEdamam(query, page)
      ]).then(data => {
        let recipes = [...data[0], ...data[1]]
        vm.aRecipes.push(...recipes)
      })
      pagesShown = page
    }
  }
})()
