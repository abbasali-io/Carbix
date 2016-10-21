'use strict';

describe('module: main, controller: AddCarPhotosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AddCarPhotosCtrl;
  beforeEach(inject(function ($controller) {
    AddCarPhotosCtrl = $controller('AddCarPhotosCtrl');
  }));

  it('should do something', function () {
    expect(!!AddCarPhotosCtrl).toBe(true);
  });

});
