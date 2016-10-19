'use strict';

describe('module: main, controller: SearchCarCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var SearchCarCtrl;
  beforeEach(inject(function ($controller) {
    SearchCarCtrl = $controller('SearchCarCtrl');
  }));

  it('should do something', function () {
    expect(!!SearchCarCtrl).toBe(true);
  });

});
