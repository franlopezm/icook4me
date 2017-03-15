/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('HomeCtrl', HomeCtrl)

  function HomeCtrl ($scope, $rootScope, auth, $location) {
    $rootScope.section = 'home'

    $scope.addBookmark = (id) => {
      console.log(id)
    }
    console.log(auth)
    console.log($rootScope.loggedUser)
    $scope.repeat = [{}, {}, {}, {}, {}, {}, {}]
  }
})()
