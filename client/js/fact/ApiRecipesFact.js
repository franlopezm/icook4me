(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('ApiRecipesFact', ApiRecipesFact)

  function ApiRecipesFact ($http, $rootScope) {
    return {
      addRecipe,
      getAllRecipe
    }

  // Helper functions
    function addRecipe (title, image, description, ingredients, steps) {
      const autor = {
        name: $rootScope.loggedUser.name,
        id: $rootScope.loggedUser.id,
        image: $rootScope.loggedUser.image
      }
      return $http.post('/api/recipe', {title, image, description, ingredients, steps, autor})
                .then(data => data)
    }

    function getAllRecipe (id) {
      return $http.get('/api/recipe/all/' + id)
                .then(data => data)
    }
  }
})()
