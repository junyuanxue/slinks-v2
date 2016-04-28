angular
  .module('slinksApp')
  .factory('SlinkFactory', function() {
    var Slink = function(url) {
      this.url = url;
    };

    return Slink;
  });
