/* eslint no-undef: "off" */
angular
  .module('iCook4meApp', [
    'ngRoute'
  ])

.controller('HomeCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'home'
})
.controller('RecipeDetailsCtrl', function ($scope, $rootScope) {
  $rootScope.section = ''
})
.controller('BookRecipesCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'bookrecipes'
})
.controller('ProfileCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'profile'
})

.run(function ($rootScope, $location) {
  let history = []

  $rootScope.$on('$routeChangeSuccess', function () {
    history.push($location.$$path)
  })

  $rootScope.back = function () {
    let prevUrl = history.length > 1 ? history.splice(-2)[0] : '/'
    $location.path(prevUrl)
  }
})
