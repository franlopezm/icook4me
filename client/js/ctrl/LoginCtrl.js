/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl ($scope, $rootScope, $location, AuthFact) {
    $rootScope.section = 'login'

    $scope.login = function (e) {
      e.preventDefault()
      const username = $scope.username
      const password = $scope.password
      AuthFact.login({ username, password })
        .then(AuthFact.setCredentials)
        .then(() => $location.path('/'))
    }
  }
})()
