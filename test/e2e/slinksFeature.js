describe('Slinks', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Slinks');
  });

  it('displays a list of links', function() {
    browser.get('/');
    var slinks = $$('#slinks li');
    expect(slinks.first().getText()).toEqual('https://slack.com/')
  });
});
