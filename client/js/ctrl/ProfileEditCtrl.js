(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('ProfileEditCtrl', ProfileEditCtrl)

  function ProfileEditCtrl ($rootScope, ApiUsersFact) {
    $rootScope.section = 'profile'
    let vm = this
    ApiUsersFact.getUser()
      .then(({data}) => vm.userData = data)

    vm.saveUser = () => {
      const name = vm.name
      if (name.replace(/\s/g, '') !== '') {
        ApiUsersFact.updateUser(name, vm.image, vm.description)
      }
    }
  }
})()
