(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('ProxyRecipesFact', ProxyRecipesFact)

  function ProxyRecipesFact ($http, ApiRecipesFact) {
    return {
      searchFood2fork,
      searchEdamam
    }

  // Helper functions
    function searchFood2fork (searchQuery, numPage = 1) {
      let query = searchQuery
      let page = numPage
      return $http.get(`/proxy/food2fork?q=${query}&page=${page}`)
                .then(({data}) => compareRecipes(data))
    }
    function searchEdamam (searchQuery, numPage = 1) {
      let query = searchQuery
      let page = numPage
      let limit = 30
      return $http.get(`/proxy/edamam?q=${query}&page=${page}&limit=${limit}`)
                .then(({data}) => compareRecipes(data))
    }

    function compareRecipes (data) {
      let newRecipes = ApiRecipesFact.getAllRecipesExternal()
        .then(recipes => {
          recipes.forEach(elem => {
            let result = data.findIndex(dataElem => dataElem.publisher.id === elem.publisher.id)
            data[result] = (result !== -1) ? elem : data[result]
          })
          return data
        })
      return newRecipes
    }
  }
})()
