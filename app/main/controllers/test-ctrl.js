'use strict';
angular.module('main')
  .controller('TestCtrl', function ($scope, $firebaseObject, $firebaseAuth) {

    var vm = this;

    var ref = firebase.database().ref();
    var settingsRef = firebase.database().ref().child('Settings');
    var auth = $firebaseAuth();

    vm.isWorking = "its Working locally";

    var obj = $firebaseObject(settingsRef);
    console.log(obj)
    // obj.$bindTo($scope, vm.isWorking)

     vm.isWorking = obj;

    vm.signInWithGoogle = function () {

      auth.$signInWithPopup("google")
        .then(function (firebaseUser) {
          console.log(firebaseUser);
          vm.isWorking = "signed in as :" + firebaseUser.uid;
        })
        .catch(function (error) {
          console.log("Authentication Failed : " + error);
        })
    }

  });
