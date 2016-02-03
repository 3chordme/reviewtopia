var User = require('./../models/User');

module.exports = {

  // LOGIN //

  logIn: function(req, res, next) {
    console.log('userCtrl.logIn');

  },

  newLogIn: function(req, res, next) {
    console.log('userCtrl.newLogIn');

  },

  // SIGN UP //

  signUp: function(req, res, next) {
    console.log('userCtrl.signUp');

    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  // PROFILE //

  view: function(req, res, next) { //*
    console.log('userCtrl.view');

  },

  destroy: function(req, res, next) {
    console.log('userCtrl.destroy');

  },

  // FRIENDS //

  show: function(req, res, next) { //**
    console.log('userCtrl.show');

  },

  update: function(req, res, next) { //**
    console.log('userCtrl.update');

  },

  find: function(req, res, next) {
    console.log('userCtrl.find');

  },

  overwrite: function(req, res, next) { //**
    console.log('userCtrl.overwrite');

  }

};
