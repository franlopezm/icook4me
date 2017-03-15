/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
      .module('iCook4meApp')
      .factory('ExternalRecipesFact', ExternalRecipesFact)

  function ExternalRecipesFact ($http) {
    return {
      searchFood2fork,
      searchEdamam
    }

  // Helper functions
    function searchFood2fork (searchQuery, numPage = 1) {
      let query = searchQuery
      let page = numPage
      return $http.get(`/external/food2fork?q=${query}&page=${page}`)
                .then(({data}) => data)
    }
    function searchEdamam (searchQuery, numPage = 1) {
      let query = searchQuery
      let page = numPage
      let limit = 30
      return $http.get(`/external/edamam?q=${query}&page=${page}&limit=${limit}`)
                .then(({data}) => data)
    }
  }
})()
