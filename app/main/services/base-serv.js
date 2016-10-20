'use strict';
angular.module('main')
  .service('Base', function ($ionicPopup) {

    var vm = this;

    vm.showAlert = function (title, message) {
      var alert = $ionicPopup.alert({
        title: title,
        template: message
      });

      alert();
    };

  });
