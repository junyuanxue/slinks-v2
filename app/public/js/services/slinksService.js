angular
  .module('slinksApp')
  .service('SlinksService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {

    var self = this;

    var token = 'token=xoxp-37515316146-37503744423-37518852981-304a258fda'

    self.getSlinks = function() {
      return $http.get('https://slack.com/api/search.messages?' + token + '&query=http:\/\/&pretty=1').then(function(response) {
        var messagesWithLinks = response.data.messages.matches.filter(function(message) {
          return message.attachments !== undefined;
        });

        return messagesWithLinks.map(function(message) {
          var url = message.attachments[0].from_url;
          var slink = new SlinkFactory(url);
          return slink;
        });
      })
    }
  }]);
