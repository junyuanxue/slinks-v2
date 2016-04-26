angular
  .module('slinksApp')
  .service('SlinksService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {

    var self = this;

    var KEY_ARRAY = ["previous", "previous_2", "next", "next_2"]

    self.getSlinks = function() {
      return $http.get('https://slack.com/api/search.messages?' + token + '&query=http:\/\/&pretty=1')
        .then(_getArrayOfLinks)       
    }

    function _getArrayOfLinks(response){

      return response.data.messages.matches.map(lookAtNestedObjects)
    
      function lookAtNestedObjects(message){
        var arrayOfAllLinks = []
        KEY_ARRAY.forEach(checkNeighbourMessageForHttp)
        return arrayOfAllLinks

        function checkNeighbourMessageForHttp(text, index){
          if(!!message[text]){             
            isALink(text)
          }
          return arrayOfAllLinks
        }

        function isALink(item){
          var slink = isNotNested(item) || isNestedHashALink(item)
          if(!!slink){
            arrayOfAllLinks.push(slink)
          }
        }

        function isNestedHashALink(linkObject){
          if(message[linkObject].text.includes("http")){
            var link = saveOnlyLinkAddress(message[linkObject].text)
            return (new SlinkFactory(link))
          }
        }

        function isNotNested(linkObject){
          if(linkObject === "text"){
            var link = saveOnlyLinkAddress(message[linkObject])
            return (new SlinkFactory(link))
          }
        }

        function saveOnlyLinkAddress(linkText){
          return linkText.match(/<.+>/)[0].slice(1,-1)
        }
      }



    }

  }]);