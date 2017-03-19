(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('ProfileCtrl', ProfileCtrl)

  function ProfileCtrl ($rootScope, $location, AuthFact, ApiUsersFact) {
    let vm = this
    $rootScope.section = 'profile'
    vm.logout = function () {
      AuthFact.logout()
      $location.path('/login')
    }

    ApiUsersFact.getUserPopulate($rootScope.loggedUser.id)
      .then(data => vm.userData = data)
  }
})()
