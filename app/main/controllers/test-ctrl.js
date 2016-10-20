
'use strict';
angular.module('main')
  .controller('TestCtrl', function ($log, $scope, AuthService, $firebaseObject, $firebaseAuth, refs) {

    var vm = this;

    var ref = firebase.database().ref();
    var settingsRef = firebase.database().ref().child(refs.settings);
    var usrRef = firebase.database().ref().child(refs.users);
    var auth = $firebaseAuth();


    vm.isWorking = 'yes its Working now';
    vm.credential = '';
    vm.user = '';
    vm.isLoggedIn = '';

    var obj = $firebaseObject(settingsRef);
    console.log(obj)
    // obj.$bindTo($scope, vm.isWorking)

    vm.isWorking = obj;

    vm.signInWithGoogle = function () {
      AuthService.signInWithGoogle();
    };

    vm.logOut = function () {
      console.log('going to hit auth out')
      auth.$signOut().then(function () {
        console.log('callback of logout')
        getAuthStatus();
      });
    }

    function getAuthStatus() {
      //temp code


      // end temp code

      
      if (auth.$getAuth()) {
        vm.isLoggedIn = true
      }
      else {
        vm.isLoggedIn = false;
      }
    }

    getAuthStatus();

  });
