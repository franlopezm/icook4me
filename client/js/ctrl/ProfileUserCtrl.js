(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('ProfileUserCtrl', ProfileUserCtrl)

  function ProfileUserCtrl ($rootScope, $routeParams, ApiUsersFact) {
    $rootScope.section = 'profile'
    const id = $routeParams.id
    let vm = this
    const showItems = 18
    let page = 1

    ApiUsersFact.getUserPopulate(id)
      .then(data => {
        vm.userData = data
        vm.recipes = data.recipes
      })

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
