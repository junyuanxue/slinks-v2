describe('slinksController', function() {
  beforeEach(module('slinksApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $contoller('slinksController');
  }));

  it('initializes with an empty array', function() {
    expect(ctrl.links).toEqual([]);
  });
});
