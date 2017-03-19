(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('ApiRecipesFact', ApiRecipesFact)

  function ApiRecipesFact ($http, $rootScope) {
    return {
      addRecipe,
      getAllRecipe,
      searchRecipes
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

    function searchRecipes (query) {
      return $http.get('/api/recipes/search/' + query)
                .then(({data}) => data.map(recipe => {
                  if (recipe.likes.indexOf($rootScope.loggedUser) !== -1) {
                    return recipe.likes = 1
                  } else {
                    return recipe.likes = 0
                  }
                }))
    }
  }
})()
