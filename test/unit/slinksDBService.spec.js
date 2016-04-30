describe('SlinksDBService', function() {
  beforeEach(module('slinksApp'));

  var SlinksDBService, httpBackend;

  var slinkDBData = [
      { url: 'https://slack.com/', starred: false },
      { url: 'http://expressjs.com/', starred: true }
  ];

  beforeEach(inject(function(_SlinksDBService_, _SlinkFactory_, $httpBackend) {
    SlinkFactory = _SlinkFactory_;
    SlinksDBService = _SlinksDBService_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of links from slinks database', function() {
    httpBackend.expectGET('/api/slinks').respond(slinkDBData);

    var slink1 = { url: 'https://slack.com/', starred: false };
    var slink2 = { url: 'http://expressjs.com/', starred: true };

    SlinksDBService.getSlinksFromDB().then(function(slinks) {
      expect(slinks).toEqual([slink1, slink2]);
    });

    httpBackend.flush();
  });

  it('makes a PUT request to star a link in the database', function() {
    var _then = jasmine.createSpy('_then');
    var slink = { id: 1 };

    httpBackend.expectPUT('/api/slink/' + slink.id).respond(200);
    SlinksDBService.starSlinkInDB(slink).then(_then);
    httpBackend.flush();

    expect(_then).toHaveBeenCalled();
  })
});
