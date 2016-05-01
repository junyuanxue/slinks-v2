module.exports = function(app) {

  var express = require('express');
  var path = require('path');
  var SlinksCall = require('./slinksCall.js');
  var slinksCall = new SlinksCall();
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  var models = require("../models/index");

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/api/slinks', function(req, res) {
    models.Slink.findAll().then(function(slinks) {
      res.send(slinks);
    });
  });

  app.post('/api/slinks', function(req, res){
    models.Slink.findOrCreate({
      where: { url: req.body.url },
      defaults: { starred: false }
    });
  });

  app.put('/api/slink/:id', function(req, res) {
    models.Slink.find({
      where: { id: req.params.id }
    }).then(function(slink) {
      if (slink) {
        slink.updateAttributes({
          url: req.body.url,
          starred: req.body.starred
        });
      }
    })
  })

  app.get('/slinks', function(req, res) {
    slinksCall.requestToSlack().then(function(slinksData) {
      return res.send(slinksData);
    }).catch(function(error) {
      return res.send(error);
    });
  });
};
