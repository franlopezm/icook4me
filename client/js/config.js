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
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    })
    .when('/register', {
      templateUrl: '/templates/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'vm'
    })
    .when('/', {
      templateUrl: '/templates/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      secure: true
    })
    .when('/add', {
      templateUrl: '/templates/addrecipe.html',
      controller: 'AddRecipeCtrl',
      secure: true
    })
    .when('/edit/:id', {
      templateUrl: '/templates/editrecipe.html',
      controller: 'EditRecipeCtrl',
      controllerAs: 'vm',
      secure: true
    })
    .when('/bookmark', {
      templateUrl: '/templates/bookmark.html',
      controller: 'BookmarkCtrl',
      controllerAs: 'vm',
      secure: true
    })
    .when('/profile', {
      templateUrl: '/templates/profile.html',
      controller: 'ProfileCtrl',
      controllerAs: 'vm',
      secure: true
    })
    .when('/profile-edit', {
      templateUrl: '/templates/profile-edit.html',
      controller: 'ProfileEditCtrl',
      controllerAs: 'vm',
      secure: true
    })
    .when('/recipe/:id', {
      templateUrl: '/templates/recipedetails.html',
      controller: 'RecipeDetailsCtrl',
      controllerAs: 'vm',
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
