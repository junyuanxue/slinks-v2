angular
  .module('slinksApp')
  .controller('SlinksController', ['$http', 'SlinksService', 'SlinksDBService', 'SlinkFactory', function($http, SlinksService, SlinksDBService, SlinkFactory) {
    var self = this;

    self.slinks = [];

    SlinksDBService.getSlinksFromDB().then(function(slinks) {
      console.log(slinks);
      self.slinks = slinks;
      console.log(self.slinks);
    });

    SlinksService.getSlinks().then(function(slinks) {
    	var slinks = Array.prototype.concat.apply([], slinks);
      _sendEachSlinkToDB(slinks);
    });

    function _sendEachSlinkToDB(slinks){
      slinks.forEach(_postToDB);
    }

    function _postToDB(slink){
      var req = {
        method: 'POST',
        url: '/slinks',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ url: slink.url })
      };

      $http(req);
    }

  }]);
