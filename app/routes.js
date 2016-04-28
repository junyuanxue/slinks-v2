module.exports = function(app) {

  var path = require('path');
  var pg = require('pg');
  var connectionString = 'postgres://localhost/slinks';
  var request = require('request');
  var token = process.env.SLACK_API_TOKEN;

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.post('/slinks', function (req, res) {
    var results = [];
    console.log('hi!!!');
    console.log(req);
    console.log('**********************');
    console.log(req.data.url);

    var data = {url: "dummy data", starred: false};

    pg.connect(connectionString, function(err, client, done) {
      if(err) {
        done();
        return res.status(500).json({ success: false, data: err});
      }

      client.query("INSERT INTO slinks(url, starred) values($1, $2)", [data.url, data.starred]);
      var query = client.query("SELECT * FROM slinks ORDER BY id ASC");
      query.on('row', function(row) {
        results.push(row);
      });
      query.on('end', function() {
        done();
        return res.json(results);
      });
    });

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
          resolve(body);
        }
      });
    });
  };


};
