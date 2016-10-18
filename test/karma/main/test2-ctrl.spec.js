'use strict';

describe('module: main, controller: Test2Ctrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Test2Ctrl;
  beforeEach(inject(function ($controller) {
    Test2Ctrl = $controller('Test2Ctrl');
  }));

  it('should do something', function () {
    expect(!!Test2Ctrl).toBe(true);
  });

});
