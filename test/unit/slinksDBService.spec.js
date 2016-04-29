describe('SlinksDBService', function() {
  beforeEach(module('slinksApp'));

  var SlinksDBService, httpBackend;

  var slinkDBData = [
    { dataValues:
      {
        url: 'http://slack.com',
        starred: false
      }
    },
    { dataValues:
      {
        url: 'http://expressjs.com',
        starred: true
      }
    }
  ];

  beforeEach(inject(function(_SlinksDBService_, _SlinkFactory_, $httpBackend) {
    SlinkFactory = _SlinkFactory_;
    SlinksDBService = _SlinksDBService_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of links from slinks database', function() {
    httpBackend.expectGET('/api/slinks').respond(slinkDBData);

    var slink1 = {url: 'http://slack.com', starred: false};
    var slink2 = {url: 'http://expressjs.com', starred: true};

    SlinksDBService.getSlinksFromDB().then(function(slinks) {
      expect(slinks).toEqual([slink1, slink2]);
    });
  });
});
