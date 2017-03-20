(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('ProfileUserCtrl', ProfileUserCtrl)

  function ProfileUserCtrl ($rootScope, $routeParams, ApiUsersFact) {
    $rootScope.section = 'profile'
    const id = $routeParams.id
    let vm = this

    ApiUsersFact.getUserPopulate(id)
      .then(data => { vm.userData = data })
  }
})()
