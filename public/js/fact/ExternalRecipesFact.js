/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
      .module('iCook4meApp')
      .factory('ExternalRecipesFact', ExternalRecipesFact)

  function ExternalRecipesFact ($http) {
    return {
      searchFood2fork,
      edamam
    }

  // Helper functions
    function searchFood2fork (searchQuery) {
      let query = searchQuery
      return $http.get(`/external/food2fork?q=${query}&page=1`)
                .then(({data}) => data)
    }
    function edamam (searchQuery) {
      let query = searchQuery
      return $http.get(`/external/edamam?q=${query}&page=1`)
                .then(({data}) => data)
    }
  }
})()
