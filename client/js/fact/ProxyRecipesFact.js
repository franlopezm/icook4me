/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('ProxyRecipesFact', ProxyRecipesFact)

  function ProxyRecipesFact ($http) {
    return {
      searchFood2fork,
      searchEdamam
    }

  // Helper functions
    function searchFood2fork (searchQuery, numPage = 1) {
      let query = searchQuery
      let page = numPage
      return $http.get(`/proxy/food2fork?q=${query}&page=${page}`)
                .then(({data}) => data)
    }
    function searchEdamam (searchQuery, numPage = 1) {
      let query = searchQuery
      let page = numPage
      let limit = 30
      return $http.get(`/proxy/edamam?q=${query}&page=${page}&limit=${limit}`)
                .then(({data}) => data)
    }
  }
})()
