(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('ProfileCtrl', ProfileCtrl)

  function ProfileCtrl ($rootScope, $location, AuthFact, ApiUsersFact) {
    $rootScope.section = 'profile'
    let vm = this
    const showItems = 18
    let page = 1

    vm.logout = function () {
      AuthFact.logout()
      $location.path('/login')
    }

    ApiUsersFact.getUserPopulate($rootScope.loggedUser.id)
      .then(data => {
        vm.userData = data
        vm.recipes = data.recipes
      })

    /* Pagination */
    vm.showMoreItems = function () {
      vm.limitation = showItems * page
      let result = vm.recipes.length / showItems
      if (result < page) {
        vm.busy = true
      }
      page = page + 1
    }
  }
})()
