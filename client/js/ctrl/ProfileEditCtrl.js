(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('ProfileEditCtrl', ProfileEditCtrl)

  function ProfileEditCtrl ($rootScope, ApiUsersFact, ApiRecipesFact, Upload, AuthFact, $location) {
    $rootScope.section = 'profile'
    let vm = this
    ApiUsersFact.getUser()
      .then(({data}) => {
        vm.userData = data
        vm.imageLink = data.image
      })

    vm.saveUser = (e) => {
      e.preventDefault()
      const name = vm.name
      if (name.replace(/\s/g, '') !== '') {
        ApiUsersFact.updateUser(name, vm.imageLink, vm.description)
      }
    }
    vm.removeUser = () => {
      ApiUsersFact.removeImg(vm.imageLink)
      ApiUsersFact.deleteUser($rootScope.loggedUser.id)
        .then(() => {
          AuthFact.logout()
          $location.path('/login')
        })
    }

    /* Upload img to Cloudinary */
    vm.fileSelected = (files) => {
      if (files && files.length) {
        vm.file = files[0]
      }
    }
    vm.uploadFile = function () {
      const url = '/upload'
      const file = vm.file
      Upload.upload({ url, file })
            .success(({imageLink}) => {
              if (vm.imageLink !== undefined) {
                ApiUsersFact.removeImg(vm.imageLink)
              }
              vm.imageLink = imageLink
            })
    }
  }
})()
