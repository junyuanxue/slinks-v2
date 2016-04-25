describe('slinksController', function() {
  beforeEach(module('slinksApp'));

  var ctrl;

  beforeEach(inject(function($controller, _SlinkFactory_) {
    ctrl = $controller('SlinksController');
    SlinkFactory = _SlinkFactory_;
  }));

  it('has a list of links', function() {
    var slink = new SlinkFactory('https://slack.com/');
    expect(ctrl.slinks).toEqual([slink]);
  });

});
