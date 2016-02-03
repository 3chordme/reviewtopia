var User = require('./../models/User');

module.exports = {

  logIn: function(req, res, next) {

  },

  newLogIn: function(req, res, next) {

  },

  signUp: function(req, res, next) {
    var newUser = new User(req.body);
    console.log(req.body);
    newUser.save(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
    }

  };

  // LOGIN //



  // SIGN UP //

  // PROFILE //

  // FRIENDS //
