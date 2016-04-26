angular
  .module('slinksApp')
  .service('SlinksService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {

    var self = this;

    var token = 'token=xoxp-37515316146-37503744423-37518852981-304a258fda'

    self.getSlinks = function() {
      return $http.get('https://slack.com/api/search.messages?' + token + '&query=http:\/\/&pretty=1').then(function(response) {
        
        var keyArray = ["text","previous", "previous_2", "next", "next_2"]



        return response.data.messages.matches.map(function(message) {
          var message = message
          var neighborArray = []
          keyArray.forEach(checkNeighborForHttp)

          return neighborArray

          function checkNeighborForHttp(item, index){
            if(!!message[item] && item === "text"){ 
              var slink = new SlinkFactory(message[item]);
              neighborArray.push(slink)
            } else if(!!message[item] && message[item].text.includes("http")){ 
              var slink = new SlinkFactory(message[item].text)
              neighborArray.push(slink)
            }
            return neighborArray
          }
        });
      })
    }
  }]);
