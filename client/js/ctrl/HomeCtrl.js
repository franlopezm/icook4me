/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('HomeCtrl', HomeCtrl)

  function HomeCtrl ($scope, $rootScope, $location) {
    $rootScope.section = 'home'
    // console.log($rootScope.loggedUser)
    $scope.addBookmark = (id) => {
      console.log(id)
    }
    $scope.repeat = [{id: 0}, {id: 0}, {id: 0}, {id: 0}, {id: 0}, {id: 0}, {id: 0}]
  }
})()
