'use strict';

describe('module: main, service: Base', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Base;
  beforeEach(inject(function (_Base_) {
    Base = _Base_;
  }));

  it('should do something', function () {
    expect(!!Base).toBe(true);
  });

});
