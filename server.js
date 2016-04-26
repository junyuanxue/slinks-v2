var express = require('express');
var app = express();
var routes = require('./app/routes/routes.js')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

exports = module.exports = app;
