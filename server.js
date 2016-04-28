var express = require('express');
var app = express();
var routes = require('./routes/index.js')(app);
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));


app.listen(8080, function () {
  console.log('App listening on port 8080!');
});

exports = module.exports = app;
