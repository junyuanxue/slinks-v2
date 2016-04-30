angular
  .module('slinksApp')
  .service('SlinksAPIService', ['$http', 'SlinkFactory', function($http, SlinkFactory) {

    var self = this;

    var KEY_ARRAY = ["previous", "previous_2", "next", "next_2"];

    self.getSlinks = function() {
      return $http.get('/slinks')
        .then(_getArrayOfSlinkObjects);
    };

    function _getArrayOfSlinkObjects(allMessageData){
      var results = allMessageData.data.messages.matches.map(extractMessagesFromMatches);
      return flattenArrays(results)
        .filter(forLinks)
        .map(removeLinkTags)
        .map(linkToSlinkObject);
    }

    function extractMessagesFromMatches(matchesObject) {
      var nestedArray = [matchesObject.text];
      KEY_ARRAY.forEach(function getText(key){
        if(!!matchesObject[key]) {
          nestedArray.push(matchesObject[key].text);
        }
      });
      return nestedArray;
    }

    function flattenArrays(multidimensionalArray){
      return  Array.prototype.concat.apply([], multidimensionalArray);
    }

    function forLinks(message) {
      return message.includes("http");
    }

    function removeLinkTags(link) {
      return link.match(/<.+>/)[0].slice(1,-1);
    }

    function linkToSlinkObject(link) {
      return (new SlinkFactory(link));
    }
  }]);
