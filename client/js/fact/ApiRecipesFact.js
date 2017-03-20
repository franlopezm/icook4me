(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('ApiRecipesFact', ApiRecipesFact)

  function ApiRecipesFact ($http, $rootScope) {
    return {
      addRecipe,
      getAllRecipe,
      updateRecipe,
      getAllPopAutor,
      searchRecipes,
      like
    }

  // Helper functions
    function addRecipe (title, image, description, ingredients, steps) {
      const autor = $rootScope.loggedUser.id
      return $http.post('/api/recipe', {title, image, description, ingredients, steps, autor})
                .then(data => data)
    }

    function getAllRecipe (id) {
      return $http.get('/api/recipe/all/' + id)
                .then(({data}) => {
                  data.like = (data.likes.indexOf($rootScope.loggedUser.id) !== -1) ? 1 : 0
                  data.bookmark = (data.bookmarks.indexOf($rootScope.loggedUser.id) !== -1) ? 1 : 0
                  return data
                })
    }

    function updateRecipe (id, title, image, description, ingredients, steps) {
      return $http.put(`/api/recipe/${id}`, {title, image, description, ingredients, steps})
                .then(data => data)
    }

    function getAllPopAutor () {
      return $http.get('/api/recipes/autorpop')
                .then(({data}) => {
                  data = data.map(elem => {
                    elem.like = (elem.likes.indexOf($rootScope.loggedUser.id) !== -1) ? 1 : 0
                    elem.bookmark = (elem.bookmarks.indexOf($rootScope.loggedUser.id) !== -1) ? 1 : 0
                    return elem
                  })
                  return data
                })
    }

    function like (id, like) {
      const url = `/api/recipe/like/${id}`
      const userId = $rootScope.loggedUser.id
      return $http.put(url, {userId, like})
                .then(({data}) => data)
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
