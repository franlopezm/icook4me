(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('ApiUsersFact', ApiUsersFact)

  function ApiUsersFact ($http, $rootScope) {
    return {
      getUser
    }

  // Helper functions
    function getUser () {
      let userId = $rootScope.loggedUser.id
      return $http.get(`/api/user/${userId}`)
                .then((data) => data)
    }
  }
})()
