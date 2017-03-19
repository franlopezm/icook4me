(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl ($rootScope, $location, AuthFact) {
    $rootScope.section = 'login'
    let vm = this

    vm.login = function (e) {
      e.preventDefault()
      const username = vm.username
      const password = vm.password
      AuthFact.login({ username, password })
        .then(AuthFact.setCredentials)
        .then(() => $location.path('/'))
        .catch(() => vm.msg = true)
    }
    vm.showMsg = () => {
      vm.msg = false
    }
  }
})()
