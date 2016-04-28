var express = require('express');
var app = express();
var routes = require('./app/routes.js')(app);
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

exports = module.exports = app;
