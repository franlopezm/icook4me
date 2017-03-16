/* eslint no-undef: "off" */
angular
  .module('iCook4meApp')
  .run(runConfig)

function runConfig ($rootScope, $location, StorageFact, AuthFact) {
  /* Authentication autorization */
  if (AuthFact.isLoggedIn()) {
    const token = StorageFact.readToken()
    AuthFact.setCredentials(token)
  }

  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next && next.secure) {
      if (!AuthFact.isLoggedIn()) {
        $location.path('/login')
      }
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
