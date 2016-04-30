describe('slinksController', function() {
  beforeEach(module('slinksApp'));

  var ctrl, SlinkFactory, httpBackend, SlinksAPIService, SlinksDBService;

  var slinkDBData = [
      { url: 'https://slack.com/', starred: false },
      { url: 'http://expressjs.com', starred: true }
  ];

  beforeEach(inject(function($controller, _SlinkFactory_, $httpBackend, _SlinksAPIService_, _SlinksDBService_) {
    ctrl = $controller('SlinksController');
    SlinkFactory = _SlinkFactory_;
    httpBackend = $httpBackend;
    SlinksAPIService = _SlinksAPIService_;
    SlinksDBService = _SlinksDBService_;
  }));

  it('fetches a list of links from slinks database', function() {
    httpBackend.expectGET('/api/slinks').respond(slinkDBData);

    var slink1 = { url: 'https://slack.com/', starred: false };
    var slink2 = { url: 'http://expressjs.com', starred: true };

    SlinksDBService.getSlinksFromDB().then(function(slinks) {
      expect(ctrl.slinks).toEqual([slink2, slink1]);
    });
  });

  it('fetches a list of links from Slack API', function() {
    expect(SlinksAPIService.getSlinksFromDB).toHaveBeenCalled;
  });
});
