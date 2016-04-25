angular
  .module('slinksApp')
  .controller('SlinksController', ['$http', 'SlinksService', 'SlinkFactory', function($http, SlinksService, SlinkFactory) {
    var self = this;

    self.slinks = [new SlinkFactory('https://slack.com/')];

    SlinksService.getSlinks().then(function(slinks) {
      console.log(slinks);
      self.slinks = slinks;
    })

  }])
