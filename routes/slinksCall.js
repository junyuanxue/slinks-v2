module.exports = function SlinksCall() {
  var request = require('request');
  var token = process.env.SLACK_API_TOKEN;

  SlinksCall.prototype.requestToSlack = function() {
    var options = {
      url: "https://slack.com/api/search.messages?token=" + token + "&query=http:\/\/&pretty=1",
      headers: {
        'User-Agent': 'request'
      }
    };

    return new Promise(function(resolve, reject) {
      request(options, function(error, response, body) {
        if (error) return reject(error);
        if (response.statusCode !== 200) return reject(new Error(body));
        if (!error && response.statusCode === 200) {
          resolve(body);
        }
      });
    });
  }
}
