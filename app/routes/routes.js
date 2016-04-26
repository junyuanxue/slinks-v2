
module.exports = function(app) {
  var path = require('path');


  app.get('/', function (req, res) {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname+'/../../public/index.html'));
    //******* we need to address this routing!!! *****

  });

  app.get('/stuff', function (req, res) {
    res.send('Testing another route...');
  });

};
