/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('SearchCtrl', SearchCtrl)

  function SearchCtrl ($scope, $rootScope, ExternalRecipesFact) {
    $rootScope.section = 'search'
    let querySearch = ''

    $scope.addBookmark = (id) => {
      console.log(id)
    }

    $scope.$on('searchRecipes', function (event, query) {
      $rootScope.recipesSearch = []
      querySearch = query
      ExternalRecipesFact.searchFood2fork(querySearch)
      .then(recipes => {
        $rootScope.recipesSearch.unshift(...recipes)
      })
      ExternalRecipesFact.edamam(querySearch)
      .then(recipes => {
        $rootScope.recipesSearch.unshift(...recipes)
      })
      console.log($rootScope.recipesSearch)
      $scope.hasMoreItemsToShow = hasMoreItemsToShow
    })

    // Pagination functionality
    var pagesShown = 1
    var pageSize = 15
    $scope.paginationLimit = function () {
      return pageSize * pagesShown
    }
    function hasMoreItemsToShow (num) {
      return pagesShown < (num / pageSize)
    }
    $scope.showMoreItems = function () {
      let page = pagesShown + 1
      ExternalRecipesFact.searchFood2fork(querySearch, page)
        .then(recipes => {
          $rootScope.recipesSearch.push(...recipes)
        })
      ExternalRecipesFact.edamam(querySearch, page)
        .then(recipes => {
          $rootScope.recipesSearch.push(...recipes)
        })
      console.log($rootScope.recipesSearch)
      pagesShown = page
    }
  }
})()
