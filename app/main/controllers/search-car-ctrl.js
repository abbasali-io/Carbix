'use strict';
angular.module('main')
.controller('SearchCarCtrl', function ($log, $scope) {
    var vm = this;
    vm.title = 'Search Car';
    $log.log('Hello from your Controller: SearchCarCtrl in module main:. This is your controller:', this);
// dummy results
    $scope.results = [
        {
            make: 'Proton',
            model: 'Saga'
        },
        {
            make: 'Proton',
            model: 'Satria'
        },
        {
            make: 'Perodua',
            model: 'Myvi'
        },
        {
            make: 'Perodua',
            model: 'Viva'
        },
        {
            make: 'Honda',
            model: 'Civic'
        },
        {
            make: 'Proton',
            model: 'Saga'
        },
        {
            make: 'Proton',
            model: 'Satria'
        },
        {
            make: 'Perodua',
            model: 'Myvi'
        },
        {
            make: 'Perodua',
            model: 'Viva'
        },
        {
            make: 'Honda',
            model: 'Civic'
        },
        {
            make: 'Proton',
            model: 'Saga'
        },
        {
            make: 'Proton',
            model: 'Satria'
        },
        {
            make: 'Perodua',
            model: 'Myvi'
        },
        {
            make: 'Perodua',
            model: 'Viva'
        },
        {
            make: 'Honda',
            model: 'Civic'
        },
    ];
});
