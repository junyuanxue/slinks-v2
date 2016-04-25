describe('Slinks', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Slinks');
  });
});
