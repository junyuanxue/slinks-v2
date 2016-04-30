module.exports = function(app) {

  var express = require('express');
  var path = require('path');
  var request = require('request');
  var SlinksCall = require('./slinksCall.js');
  var slinksCall = new SlinksCall();

  var models = require("../models/index");

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/api/slinks', function(req, res) {
    models.Slink.findAll().then(function(slinks) {
      res.send(slinks);
    });
  });

  app.post('/api/slinks', function(req,res){
    models.Slink.findOrCreate({
      where: { url: req.body.url },
      defaults: { starred: false }
    });
  });

  app.get('/slinks', function(req, res) {
    slinksCall.requestToSlack().then(function(slinksData) {
      return res.send(slinksData);
    }).catch(function(error) {
      return res.send(error);
    });
  });
};
