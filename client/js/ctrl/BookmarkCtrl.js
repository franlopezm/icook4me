(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('BookmarkCtrl', BookmarkCtrl)

  function BookmarkCtrl ($rootScope, ApiUsersFact) {
    $rootScope.section = 'bookrecipes'
    let vm = this
    const showItems = 18
    let page = 1

    ApiUsersFact.getBookmarks()
      .then(data => {
        vm.recipes = data
        vm.showResult = true
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
