var express = require('express');
var app = express();
<<<<<<< HEAD
var routes = require('./app/routes.js')(app);
=======
var routes = require('./app/routes/routes.js')(app);
>>>>>>> 9880e771661fbd51c733ac90b9cf47e3e404cd44
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

exports = module.exports = app;
