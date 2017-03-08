/* eslint no-undef: "off" */
angular
    .module('iCook4meApp')
    .config(configRoute)

function configRoute ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/home.html',
      controller: 'HomeCtrl'
//      controllerAs: 'vm'
    })
    .when('/search', {
      templateUrl: '/templates/search.html',
      controller: 'SearchCtrl'
    })
    .when('/bookrecipes', {
      templateUrl: '/templates/bookrecipes.html',
      controller: 'BookRecipesCtrl'
    })
    .when('/profile', {
      templateUrl: '/templates/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/recipe/:id', {
      templateUrl: '/templates/recipedetails.html',
      controller: 'RecipeDetailsCtrl'
    })
    .otherwise('/')
}
