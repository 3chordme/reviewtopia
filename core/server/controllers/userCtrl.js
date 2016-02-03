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

    var currentUser = req.user;
    if (!req.user) { currentUser = "56b23efb9404a9f596d2ecfe"; }

    User.findById(currentUser, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  destroy: function(req, res, next) {
    console.log('userCtrl.destroy');

    var currentUser = req.user;
    if (!req.user) { currentUser = "56b24bfc683381619c8f76f8"; }

    User.findByIdAndRemove(currentUser, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });

  },

  // FRIENDS //

  show: function(req, res, next) { //**
    console.log('userCtrl.show');

    var currentUser = req.user;
    if (!req.user) { currentUser = "56b24bfc683381619c8f76f8"; }

    User.findById(currentUser)
      .populate('friendIds')
      .exec(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result.friendIds);
      }
    });

  },

  unfriend: function(req, res, next) { //**
    console.log('userCtrl.unfriend');

    var currentUser = req.user;
    if (!req.user) { currentUser = "56b24bfc683381619c8f76f8"; }

    //look for req.params.id(id) in friendIds array of currentUser. delete that from the array.

  },

  find: function(req, res, next) {
    console.log('userCtrl.find');

    var currentUser = req.user;
    if (!req.user) { currentUser = "56b24bfc683381619c8f76f8"; }

    console.log(req.params.email);
    User.find({ email: req.params.email }, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });

  },

  friend: function(req, res, next) { //**
    console.log('userCtrl.friend');

    var currentUser = req.user;
    if (!req.user) { currentUser = "56b24bfc683381619c8f76f8"; }

  }

};
