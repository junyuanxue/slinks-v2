describe('slinksFactory', function(){
  beforeEach(module('slinksApp'));

  var slink;

  beforeEach(inject(function(SlinkFactory){
    slink = new SlinkFactory('https://slack.com/');
  }));

  it('has a url', function() {
    expect(slink.url).toEqual('https://slack.com/');
  });
});
