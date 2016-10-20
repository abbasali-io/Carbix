'use strict';
angular.module('main')
  .service('AuthService', function ($log, $firebaseAuth, $firebaseObject, Base, refs) {

    var vm = this;

    var auth = $firebaseAuth();
    var usrRef = firebase.database().ref().child(refs.users);

    vm.signInWithGoogle = function () {
      auth.$signInWithPopup('google')
        .then(function (firebaseUser) {
          var uid = firebaseUser.user.uid;
          // var uid = '001'
          // check if user is already logged in and register if not
          var currentUser = $firebaseObject(usrRef.child(uid));

          currentUser.$loaded(function () {
            if (currentUser.$value !== null) {
              console.log('user exists')
            }
            else {
              console.log('user dont exxist')

              // save new user
              var usr = firebaseUser.user;
              var cred = firebaseUser.crredential;
              var uuid = 'google' + usr.uid;

              usrRef.$child(uuid).set({
                displayName: usr.displayName,
                email: usr.email,
                avatar: usr.photoURL,
                provider: cred.provider,
                registerDate: firebase.database.ServerValue.TTIMESTAMP
              })
            }

          })



        })
        .catch(function (error) {
          console.log('Authentication Failed : ' + error);
        });
    }

  });
