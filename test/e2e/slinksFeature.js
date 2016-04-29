describe('Slinks', function() {
  var mock = require('protractor-http-mock');

  beforeEach(function() {
    mock([{
      request: {
        path: "/api/slinks",
        method: 'GET'
      },

      response: {
        data: [
            { url: 'https://slack.com/', starred: false },
            { url: 'https://www.mongodb.org/', starred: true }
        ]
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

    expect(slinks.first().getText()).toEqual('https://www.mongodb.org/');
    expect(slinks.last().getText()).toEqual('https://slack.com/');
  });
});
