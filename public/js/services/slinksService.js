angular
  .module('slinksApp')
  .service('SlinksService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {

    var self = this;

    var token = "xoxp-37515316146-37503744423-37518852981-304a258fda";

    var KEY_ARRAY = ["text", "previous", "previous_2", "next", "next_2"];

    self.getSlinks = function() {  //rename Slinks at this level?
      return $http.get('https://slack.com/api/search.messages?token=' + token + '&query=http:\/\/&pretty=1')
        .then(_getArrayOfMessageObjects);
        	.then(_extractObjectsToNestedArray);
    };
    //
    function _getArrayOfMessageObjects(response){
      console.log(response.data.messages.matches);
    	// console.log(response.data.messages.matches);
      // return response.data.messages.matches.map(lookAtNestedObjects);
      return response.data.messages.matches;
    }

    function _handleObjects(response) {
      reponse.map(_extractObjectContents);
    }

    //   function lookAtNestedObjects(message){
    //     var arrayOfAllLinks = [];
    //     KEY_ARRAY.forEach(checkNeighbourMessageForHttp);
    //     return arrayOfAllLinks;
    //
    //     function checkNeighbourMessageForHttp(text, index){
    //       if(!!message[text]){
    //         isALink(text);
    //       }
    //       return arrayOfAllLinks;
    //     }
    //
    //     function isALink(item){
    //       var slink = isNotNested(item) || isNestedHashALink(item);
    //       if(!!slink){
    //         arrayOfAllLinks.push(slink);
    //       }
    //     }
    //
    //     function isNestedHashALink(linkObject){
    //       if(message[linkObject].text.includes("http")){
    //         var link = saveOnlyLinkAddress(message[linkObject].text);
    //         return (new SlinkFactory(link));
    //       }
    //     }
    //
    //     function isNotNested(linkObject){
    //       if(linkObject === "text"){
    //         var link = saveOnlyLinkAddress(message[linkObject]);
    //         return (new SlinkFactory(link));
    //       }
    //     }
    //
    //
    //   }
    //
    //
    //
    // }
    // function saveOnlyLinkAddress(linkText){
    //       return linkText.match(/<.+>/)[0].slice(1,-1);


  }]);
