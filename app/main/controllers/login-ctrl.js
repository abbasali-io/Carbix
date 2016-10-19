'use strict';
angular.module('main')
.controller('LoginCtrl', function ($log) {
    var vm = this;
    vm.title = 'Login Page';
    $log.log('Hello from your Controller: LoginCtrl in module main:. This is your controller:', this);
});
