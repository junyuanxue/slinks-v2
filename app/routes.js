module.exports = function(app) {

  var request = require('request');
  var token = process.env.SLACK_API_TOKEN;

  app.get('/', function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/slinks', function(req, res) {
    _requestToSlack().then(function(slinksData) {
      return res.send(slinksData);
    }).catch(function(error) {
      return res.send(error);
    });
  });

  function _requestToSlack() {
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
          resolve(JSON.parse(body));
        }
      });
    });
  };
};
