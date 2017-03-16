/* eslint no-undef: "off" */
angular
  .module('iCook4meApp', [
    'ngRoute',
    'angular-jwt',
    'infinite-scroll',
    'myComponents'
  ])

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

