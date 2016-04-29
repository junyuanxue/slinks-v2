angular
  .module('slinksApp')
  .service('SlinksDBService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {
    var self = this;

    self.getSlinksFromDB = function() {
      return $http.get('/api/slinks').then(function(response) {
        return response.data;
      });
    };
  }]);
