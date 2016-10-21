'use strict';
angular.module('main')
.controller('AddCarCtrl', function ($log) {
    var vm = this;
    vm.title = 'Add Car';
    $log.log('Hello from your Controller: AddCarCtrl in module main:. This is your controller:', this);

});
