(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('ApiUsersFact', ApiUsersFact)

  function ApiUsersFact ($http, $rootScope, $location) {
    return {
      getUser,
      getUserPopulate,
      updateUser,
      bookmark
    }

  // Helper functions
    function getUser () {
      const userId = $rootScope.loggedUser.id
      return $http.get(`/api/user/${userId}`)
                .then((data) => data)
    }

    function getUserPopulate (id) {
      const url = `/api/user/all/${id}`
      return $http.get(url)
                .then(({data}) => data)
    }

    function updateUser (name, image, description) {
      const userId = $rootScope.loggedUser.id
      const userObj = { name, image, description }
      const url = `/api/user/${userId}`
      return $http.put(url, userObj)
                .then(({data}) => {
                  if (data.success) {
                    $rootScope.loggedUser.name = name
                    $rootScope.loggedUser.image = image
                    $location.path('/profile/')
                  }
                })
    }

    function bookmark (recipeId, bookmark) {
      const id = $rootScope.loggedUser.id
      const url = `/api/user/bookmark/${id}`
      return $http.put(url, {recipeId, bookmark})
                .then(({data}) => data)
    }
  }
})()
