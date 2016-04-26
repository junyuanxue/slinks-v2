var express = require('express');
var app = express();

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.get('/stuff', function (req, res) {
    res.send('Testing another route...');
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
