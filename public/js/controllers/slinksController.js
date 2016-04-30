angular
  .module('slinksApp')
  .controller('SlinksController', ['$http', 'SlinksAPIService', 'SlinksDBService', 'SlinkFactory', function($http, SlinksAPIService, SlinksDBService, SlinkFactory) {
    var self = this;

    self.slinks = [new SlinkFactory("www.mongodb.com")];

    SlinksDBService.getSlinksFromDB().then(function(slinks) {
      self.slinks = slinks.reverse();
    });

    SlinksAPIService.getLinksFromSlack().then(function(slinks) {
    	var slinks = Array.prototype.concat.apply([], slinks);

      //TO BE MOVED TO SlinksDBService:
      _sendEachSlinkToDB(slinks);
    });

    function _sendEachSlinkToDB(slinks){
      slinks.forEach(_postToDB);
    }

    function _postToDB(slink){
      var req = {
        method: 'POST',
        url: '/api/slinks',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ url: slink.url })
      };

      $http(req);
    }

    self.starSlink = function(slink) {
      SlinksDBService.starSlinkInDB(slink);
    }
  }]);
