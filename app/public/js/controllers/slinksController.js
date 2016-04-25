angular
  .module('slinksApp')
  .controller('SlinksController', ['SlinkFactory', function(SlinkFactory) {
    var self = this;

    self.slinks = [new SlinkFactory('https://slack.com/')];

  }])
