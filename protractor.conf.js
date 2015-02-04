'use strict';

exports.config = {

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};
