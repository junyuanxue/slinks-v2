module.exports = function(app) {

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.get('/stuff', function (req, res) {
    res.send('Testing another route...');
  });

};
