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
    .when('/add', {
      templateUrl: '/templates/add_recipe.html',
      controller: 'AddRecipeCtrl'
    })
    .when('/bookrecipes', {
      templateUrl: '/templates/bookrecipes.html',
      controller: 'BookRecipesCtrl'
    })
    .when('/profile', {
      templateUrl: '/templates/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/login', {
      templateUrl: '/templates/login.html',
      controller: 'LoginCtrl'
    })
    .when('/recipe/:id', {
      templateUrl: '/templates/recipedetails.html',
      controller: 'RecipeDetailsCtrl'
    })
    .otherwise('/login')
}
