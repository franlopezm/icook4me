/* eslint no-undef: "off" */
angular.module('iCook4meApp', [
  'ngRoute'
])
.config(($routeProvider) => {
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
    .otherwise('/')
})
.controller('HomeCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'home'
})
.controller('SearchCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'search'
})
.controller('BookRecipesCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'bookrecipes'
})
.controller('ProfileCtrl', function ($scope, $rootScope) {
  $rootScope.section = 'profile'
})
.controller('FormSearchCtrl', function ($scope, $rootScope) {
  $scope.searchRecipes = function (e) {
    e.preventDefault()
    SpotifyFactory.searchArtist($scope.search)
      .then(function (response) {
        $rootScope.artists = response.data.artists.items
        $rootScope.albums = ''
        $rootScope.tracks = ''
      })
  }

  vm.centerStation = function (idStation) {
    $rootScope.$broadcast('centerSelectStation', idStation)
    $rootScope.showDetails = ''
    $rootScope.showInfo = ''
  }
})

.factory('ExternalRecipeFact', function ($http) {
  function searchArtist (searchQuery) {
    var url = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
    url = url.replace('<%ARTIST-NAME%>', searchQuery)
    return $http.get(url)
  }
  function searchAlbum (searchQuery) {
    var url = 'https://api.spotify.com/v1/artists/<%ID-ARTIST%>/albums'
    url = url.replace('<%ID-ARTIST%>', searchQuery)
    return $http.get(url)
  }
  function searchListTrack (searchQuery) {
    var url = 'https://api.spotify.com/v1/albums/<%ID-ALBUM%>/tracks'
    url = url.replace('<%ID-ALBUM%>', searchQuery)
    return $http.get(url)
  }
  return {
    searchArtist: searchArtist,
    searchAlbum: searchAlbum,
    searchListTrack: searchListTrack
  }
})
