var express = require('express');
var app = express();
var routes = require('./app/routes.js')(app);
var path = require('path');

var token = process.env.SLACK_API_TOKEN;

app.use(express.static(path.join(__dirname, '/public')));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

exports = module.exports = app;
