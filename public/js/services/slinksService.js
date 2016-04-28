angular
  .module('slinksApp')
  .service('SlinksService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {

    var self = this;

    var KEY_ARRAY = ["previous", "previous_2", "next", "next_2"];

    self.getSlinks = function() {  //rename Slinks at this level?
      return $http.get('/slinks')
        .then(_getArrayOfSlinkObjects);
    };

    function _getArrayOfSlinkObjects(allMessageData){
      var results = allMessageData.data.messages.matches.map(extractMessagesFromMatches);
      //console.log(flattenArrays(results).map(forLinks));
      return flattenArrays(results)
        .filter(forLinks)
          .map(removeLinkTags)
            .map(linkToSlinkObject);
    }

    function extractMessagesFromMatches(matchesObject) {
      var nestedArray = [matchesObject.text];
      KEY_ARRAY.forEach(function getText(key){
        if(matchesObject[key] !== undefined) {
          nestedArray.push(matchesObject[key].text);
        }
      });
      return nestedArray;
    }

    function flattenArrays(multidimensionalArray){
      return  Array.prototype.concat.apply([], multidimensionalArray);
    };

    function forLinks(message) {
      var regexedLink = message.match(/<http.+>/);
      return (regexedLink !== undefined && regexedLink !== null);
    };

    function removeLinkTags(link) {
      return link.slice(1,-1);
    };

    function linkToSlinkObject(link) {
      return (new SlinkFactory(link));
    };

  }]);
