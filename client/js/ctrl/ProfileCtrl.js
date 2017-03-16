/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('ProfileCtrl', ProfileCtrl)

  function ProfileCtrl ($scope, $rootScope, $location, AuthFact) {
    $rootScope.section = 'profile'
    $scope.logout = function () {
      AuthFact.logout()
      $location.path('/login')
    }
  }
})()
