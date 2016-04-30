angular
  .module('slinksApp')
  .service('SlinksDBService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {
    var self = this;

    self.getSlinksFromDB = function() {
      return $http.get('/api/slinks').then(function(response) {
        return response.data;
      });
    };

    self.starSlinkInDB = function(slink) {
      var req = {
        method: 'PUT',
        url: '/api/slink/' + slink.id,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ id: slink.id, url: slink.url, starred: true })
      };

      return $http(req).then(function(success) {
        return;
      });
    }
  }]);
