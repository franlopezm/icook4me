/* eslint no-undef: "off" */
angular
  .module('iCook4meApp')
  .config(configProvider)
  .config(configRoute)

// Handlers functions
function configProvider ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor')
}

function configRoute ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/templates/login.html',
      controller: 'LoginCtrl'
    })
    .when('/register', {
      templateUrl: '/templates/register.html',
      controller: 'RegisterCtrl'
    })
    .when('/', {
      templateUrl: '/templates/home.html',
      controller: 'HomeCtrl',
      secure: true
    })
    .when('/add', {
      templateUrl: '/templates/addrecipe.html',
      controller: 'AddRecipeCtrl',
      secure: true
    })
    .when('/bookrecipes', {
      templateUrl: '/templates/bookrecipes.html',
      controller: 'BookRecipesCtrl',
      secure: true
    })
    .when('/profile', {
      templateUrl: '/templates/profile.html',
      controller: 'ProfileCtrl',
      controllerAs: 'vm',
      secure: true
    })
    .when('/recipe/:id', {
      templateUrl: '/templates/recipedetails.html',
      controller: 'RecipeDetailsCtrl',
      secure: true
    })

    .when('/search/:query', {
      templateUrl: '/templates/searchrecipe.html',
      controller: 'SearchRecipeCtrl',
      secure: true
    })
    .otherwise('/')
  $locationProvider.html5Mode(true)
}
