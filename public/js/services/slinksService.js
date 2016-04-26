angular
  .module('slinksApp')
  .service('SlinksService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {

    var self = this;

    self.getSlinks = function() {
      return $http.get('/slinks');
    }
    
  }]);
