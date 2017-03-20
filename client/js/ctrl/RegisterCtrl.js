(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('RegisterCtrl', RegisterCtrl)

  function RegisterCtrl ($rootScope, AuthFact) {
    $rootScope.section = 'login'
    let vm = this
    vm.register = function (e) {
      e.preventDefault()
      const username = vm.username
      const password = vm.password
      const name = 'iCook4me' + Math.floor(Math.random() * 100000)
      const image = '/img/noimage-user.jpg'
      AuthFact.register({ username, password, name, image })
    }
    $rootScope.$on('msgExistUser', function (event, boolean) {
      vm.msg = boolean
    })
    vm.showMsg = () => {
      vm.msg = false
    }
  }
})()
