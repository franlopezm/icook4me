/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .factory('AuthInterceptor', AuthInterceptor)

  function AuthInterceptor (StorageFact) {
    return { request }

      // handlers functions
    function request (config) {
      const token = StorageFact.readToken()
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = token
      }
      return config
    }
  }
})()
