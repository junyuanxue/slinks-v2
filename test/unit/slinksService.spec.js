describe('SlinksService', function() {
  beforeEach(module('slinksApp'));

  var SlinksService, httpBackend;

  var slinksData = {
    messages: {
      matches: [
        {
          text: "<https://slack.com/>",
          previous: {
            text: "<http://expressjs.com/>"
          },
          previous_2: {
            text: "<https://mochajs.org/>"
          },
          next: {
            text: "This is not a link!"
          },
          next_2: {
            text: "<https://www.mongodb.org/>"
          }
        }
      ]
    }
  };

  beforeEach(inject(function(_SlinksService_, _SlinkFactory_, $httpBackend) {
    SlinkFactory = _SlinkFactory_;
    SlinksService = _SlinksService_;
    httpBackend = $httpBackend;
  }));

  // it('fetches a list of links from Slack API', function() {
  //   httpBackend.expectGET("/slinks").respond(slinksData);
  //
  //   var slink1 = new SlinkFactory("https://slack.com/");
  //   var slink2 = new SlinkFactory("http://expressjs.com/");
  //   var slink3 = new SlinkFactory("https://mochajs.org/");
  //   var slink4 = new SlinkFactory("https://www.mongodb.org/");
  //
  //   SlinksService.getSlinks().then(function(slinks) {
  //     expect(slinks).toEqual([[slink1, slink2, slink3, slink4]]);
  //   })
  //
  //   httpBackend.flush();
  // });

  // it('returns a flattened array of links', function() {
  //   httpBackend.expectGET("/slinks").respond(slinksData);
  //   SlinksService.getSlinks().then(function(slinks))
  //
  // })


});
