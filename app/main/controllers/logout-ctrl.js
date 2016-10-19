'use strict';

angular.module('main')
.controller('LogoutCtrl', function ($log) {  
    var vm = this;
    vm.title = 'Logout Page';
    $log.log('Hello from your Controller: LogoutCtrl in module main:. This is your controller:', this);
});
