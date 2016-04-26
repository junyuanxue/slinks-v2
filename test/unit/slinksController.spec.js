describe('slinksController', function() {
  beforeEach(module('slinksApp'));

  var ctrl, SlinkFactory, httpBackend, SlinksService;

  var slinksData = {
    messages: {
      matches: [
        {
          text: "<http://slack.com/>",
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

  var token = "xoxp-37515316146-37503744423-37518852981-304a258fda";

  beforeEach(inject(function($controller, _SlinkFactory_, $httpBackend, _SlinksService_) {
    ctrl = $controller('SlinksController');
    SlinkFactory = _SlinkFactory_;
    httpBackend = $httpBackend;
    SlinksService = _SlinksService_;

    httpBackend.expectGET("https://slack.com/api/search.messages?token=" + token + "&query=http:\/\/&pretty=1").respond(slinksData);
    httpBackend.flush();
  }));

  it('fetches a list of links from Slack API', function() {

    var slink1 = new SlinkFactory("http://slack.com/");
    var slink2 = new SlinkFactory("http://expressjs.com/");
    var slink3 = new SlinkFactory("https://mochajs.org/");
    var slink4 = new SlinkFactory("https://www.mongodb.org/");

    expect(ctrl.slinks).toEqual([slink1, slink2, slink3, slink4]);
  });
});
