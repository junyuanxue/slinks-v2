describe('SlinksService', function() {
  beforeEach(module('slinksApp'));

  var SlinksService, httpBackend;

  var slinksData = {
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

  beforeEach(inject(function(_SlinksService_, $httpBackend) {
    SlinksService = _SlinksService_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of links from Slack API', function() {
    var token = ENV['SLACK_API_TOKEN'];
    httpBackend.expectGet("https://slack.com/api/search.messages?token=" + token + "&query=http:\/\/&pretty=1");
  });

});
