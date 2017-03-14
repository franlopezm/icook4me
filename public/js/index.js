/* eslint no-undef: "off" */
angular
  .module('iCook4meApp', [
    'ngRoute',
    'infinite-scroll'
  ])

.controller('BookRecipesCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'bookrecipes'
  $scope.repeat = [{}, {}, {}, {}, {}, {}, {}]
})
.controller('ProfileCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'profile'
})
.controller('LoginCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'login'
})

.run(function ($rootScope, $location) {
  let history = []

  $rootScope.$on('$routeChangeSuccess', function () {
    history.push($location.$$path)
  })

  $rootScope.back = function () {
    let prevUrl = history.length > 1 ? history.splice(-2)[0] : '/'
    $location.path(prevUrl)
    history = []
  }
})

.directive('errSrc', function () {
  return {
    link: function (scope, element, attrs) {
      element.bind('error', function () {
        if (attrs.src !== attrs.errSrc) {
          attrs.$set('src', attrs.errSrc)
        }
      })

      attrs.$observe('ngSrc', function (value) {
        if (!value && attrs.errSrc) {
          attrs.$set('src', attrs.errSrc)
        }
      })
    }
  }
})

.directive('recipeExternal', function () {
  return {
    restrict: 'E',
    scope: {
      recipe: '=',
      addBookmark: '&'
    },
    templateUrl: '/templates/components/recipe_external.html'
  }
})

.directive('recipeInternal', function () {
  return {
    restrict: 'E',
    scope: {
      recipe: '=',
      addBookmark: '&'
    },
    templateUrl: '/templates/components/recipe_internal.html'
  }
})

.directive('searchRecipes', function () {
  return {
    restrict: 'E',
    controller: function ($scope, $location) {
      $scope.searchRecipes = function (e) {
        e.preventDefault()
        $location.url('/search/' + $scope.query)
      }
    },
    templateUrl: '/templates/components/form_search_recipes.html'
  }
})
