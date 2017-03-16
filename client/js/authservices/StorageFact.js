/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('StorageFact', StorageFact)

  function StorageFact ($window) {
    const store = $window.localStorage
    const key = 'auth-token'

    return {
      readToken,
      saveToken,
      removeToken
    }

    // Handlers functions
    function readToken () {
      return store.getItem(key)
    }

    function saveToken (token) {
      return !!store.setItem(key, token)
    }

    function removeToken () {
      return store.removeItem(key)
    }
  }
})()
