// Requiring our models
const db = require('../models');
const router = require('express').Router();

// Routes
module.exports = function (app) {
  app.get('/api/user/:id/', function (req, res) {
    //Returning JSON data for all their saved searches for a specific user -FROM THE API
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (dbchar) {
      res.json(dbchar);
    });
  });
  app.get('/api/user'),
    function (req, res) {
      db.User.findAll({
      }).then(function (dbuser) {
        res.json(dbuser);
      });
    };
};
