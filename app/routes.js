module.exports = function(app) {

  app.get('/', function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/slinks', function(req, res) {
    // http.get("https://slack.com/api/search.messages?token=" + token + "&query=http:\/\/&pretty=1").then(function(res) {
      console.log(res);
    })
  })

};
