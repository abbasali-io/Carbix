'use strict';
angular.module('main')
  .controller('TestCtrl', function ($scope, $firebaseObject, $firebaseAuth) {

    var vm = this;

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    vm.isWorking = 'yes its Working now';

    var x = $firebaseObject(ref);

    vm.isWorking = x;

    vm.signInWithGoogle = function () {

      auth.$signInWithPopup('google')
        .then(function (firebaseUser) {
          console.log(firebaseUser);
          vm.isWorking = 'signed in as :' + firebaseUser.uid;
        })
        .catch(function (error) {
          console.log('Authentication Failed : ' + error);
        });
    };

  });
