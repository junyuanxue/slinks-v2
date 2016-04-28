describe('Slinks', function() {
  var mock = require('protractor-http-mock');

  beforeEach(function() {
    mock([{
      request: {
        path: "/slinks",
        method: 'GET'
      },

      response: {
        data: {
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
        }
      }
    }
  ]);
});

  afterEach(function() {
    mock.teardown();
  });

  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Slinks');
  });

  it('displays a list of links', function() {
    browser.get('/');
    var slinks = $$('#slinks li a');

    expect(slinks.first().getText()).toEqual('https://slack.com/');
    expect(slinks.last().getText()).toEqual('https://www.mongodb.org/');
  });
});
