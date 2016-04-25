describe('slinksController', function() {
  beforeEach(module('slinksApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('SlinksController');
  }));

  it('initializes with an empty array', function() {
    expect(ctrl.slinks).toEqual(["bleh"]);
  });
});
