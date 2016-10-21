'use strict';

describe('module: main, controller: AddCarPricingCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AddCarPricingCtrl;
  beforeEach(inject(function ($controller) {
    AddCarPricingCtrl = $controller('AddCarPricingCtrl');
  }));

  it('should do something', function () {
    expect(!!AddCarPricingCtrl).toBe(true);
  });

});
