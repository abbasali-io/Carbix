'use strict';
angular.module('main')
.controller('SearchCarCtrl', function ($log) {
    var vm = this;
    vm.title = 'Search Car';
    $log.log('Hello from your Controller: SearchCarCtrl in module main:. This is your controller:', this);
});
