module.exports = function(app) {

  var request = require('request');
  var token = process.env.SLACK_API_TOKEN;

  app.get('/', function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/slinks', function(req, res) {

    return requestToSlack();

    // https.request("https://slack.com/api/search.messages?token=" + token + "&query=http:\/\/&pretty=1").on('response', function(response) {
    //   response.on('data', function(data) {
    //     console.log(data);
    //   });
    //
    //   response.on('end', function() {
    //     callback(console.log(data));
    //   });
    // }).end();


  });

  function requestToSlack() {
    var options = {
      url: "https://slack.com/api/search.messages?token=" + token + "&query=http:\/\/&pretty=1",
      headers: {
        'User-Agent': 'request'
      }
    };

    request(options, function(error, response, body) {
      if (error) return reject(error);
      if (response.statusCode !== 200) return reject(new Error(body));
      if (!error && response.statusCode === 200) {
        var slinksData = JSON.parse(body);
      }
    })
  }
};
