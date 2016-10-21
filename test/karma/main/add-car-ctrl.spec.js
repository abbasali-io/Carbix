'use strict';

describe('module: main, controller: AddCarCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AddCarCtrl;
  beforeEach(inject(function ($controller) {
    AddCarCtrl = $controller('AddCarCtrl');
  }));

  it('should do something', function () {
    expect(!!AddCarCtrl).toBe(true);
  });

});
