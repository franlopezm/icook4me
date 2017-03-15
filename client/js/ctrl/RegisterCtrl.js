/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('RegisterCtrl', RegisterCtrl)

  function RegisterCtrl ($scope, $rootScope, AuthFact) {
    $rootScope.section = 'login'
    $scope.register = function (e) {
      e.preventDefault()
      const username = $scope.username
      const password = $scope.password
      AuthFact.register({ username, password })
    }
  }
})()
