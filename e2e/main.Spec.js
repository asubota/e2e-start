'use strict';

describe('Github', function() {
  var page;

  beforeEach(function() {
    browser.get('https://github.com/');
    page = require('./main.po');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('GitHub · Build software better, together.');
  });

});
