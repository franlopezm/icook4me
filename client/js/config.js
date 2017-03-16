/* eslint no-undef: "off" */
angular
  .module('iCook4meApp')
  .config(configProvider)
  .config(configRoute)
  .run(runConfig)

// Handlers functions
function configProvider ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor')
}

function configRoute ($routeProvider) {
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
      resolve: {
        'auth': AuthFact => AuthFact.isLoggedIn()
      }
    })
    .when('/add', {
      templateUrl: '/templates/addrecipe.html',
      controller: 'AddRecipeCtrl',
      resolve: {
        'auth': AuthFact => AuthFact.isLoggedIn()
      }
    })
    .when('/bookrecipes', {
      templateUrl: '/templates/bookrecipes.html',
      controller: 'BookRecipesCtrl',
      resolve: {
        'auth': AuthFact => AuthFact.isLoggedIn()
      }
    })
    .when('/profile', {
      templateUrl: '/templates/profile.html',
      controller: 'ProfileCtrl',
      resolve: {
        'auth': AuthFact => AuthFact.isLoggedIn()
      }
    })
    .when('/recipe/:id', {
      templateUrl: '/templates/recipedetails.html',
      controller: 'RecipeDetailsCtrl',
      resolve: {
        'auth': AuthFact => AuthFact.isLoggedIn()
      }
    })

    .when('/search/:query', {
      templateUrl: '/templates/searchrecipe.html',
      controller: 'SearchRecipeCtrl',
      resolve: {
        'auth': AuthFact => AuthFact.isLoggedIn()
      }
    })
    .otherwise('/login')
  /*, $locationProvider
  $locationProvider.html5Mode(true) */
}

function runConfig ($rootScope, $location, StorageFact, AuthFact) {
  /* Authentication autorization */
  if (AuthFact.isLoggedIn()) {
    const token = StorageFact.readToken()
    AuthFact.setCredentials(token)
  }

  $rootScope.$on('$routeChangeError', function (next, current, previous, rejection) {
    console.log('hola')
    if (rejection === 'Not Authenticated') {
      $location.path('/login')
    }
  })

  /* History */
  let history = []

  $rootScope.$on('$routeChangeSuccess', function () {
    history.push($location.$$path)
  })

  $rootScope.back = function () {
    let prevUrl = history.length > 1 ? history.splice(-2)[0] : '/'
    $location.path(prevUrl)
    history = []
  }
}
