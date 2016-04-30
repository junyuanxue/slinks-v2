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

  it('displays a list of links', function() {
    browser.get('/');
    var slinks = $$('#all-links li a');

    expect(slinks.first().getText()).toEqual('https://www.mongodb.org/');
    expect(slinks.last().getText()).toEqual('https://slack.com/');
  });

  it('filters links by keywords', function() {
    browser.get('/');
    $('#search-keywords').sendKeys('mongo');
    var slinks = $$('#all-links li a');

    expect(slinks.count()).toEqual(1);
    expect(slinks.last().getText()).toEqual('https://www.mongodb.org/');
  });

  it('marks links as starred', function() {
    browser.get('/');
    var slink = $$('#all-links li a').first();
    slink.element(by.css(".star")).click();
    var starredSlinks = $$('#starred-slinks li a');
    expect(starredSlinks.first().getText()).toEqual('https://www.mongodb.org/');
    expect(slink.getText()).not.toEqual('https://www.mongodb.org/');
  })
});
