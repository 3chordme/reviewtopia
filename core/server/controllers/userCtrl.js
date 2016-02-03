var User = require('./../models/User');

module.exports = {

  // LOGIN //

  logIn: function(req, res, next) {

  },

  newLogIn: function(req, res, next) {

  },

  // SIGN UP //

  signUp: function(req, res, next) {
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

  },

  destroy: function(req, res, next) {

  },

  // FRIENDS //

  show: function(req, res, next) { //**

  },

  update: function(req, res, next) { //**

  },

  find: function(req, res, next) {

  },

  overwrite: function(req, res, next) { //**

  }

};
