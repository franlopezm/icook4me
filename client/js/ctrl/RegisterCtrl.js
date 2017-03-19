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
      const name = 'iCook4me' + Math.floor(Math.random() * 100000)
      AuthFact.register({ username, password, name })
    }
    $scope.$on('msgExistUser', function (event, boolean) {
      $scope.msg = boolean
    })
    $scope.showMsg = () => {
      $scope.msg = false
    }
  }
})()
