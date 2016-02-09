var User = require('./../models/User');

module.exports = {

  // AUTH //

  register: function(req, res, next) {
   User.create(req.body, function(err, result) {
     if(err) return res.status(500).send(err);
     newUser = result.toObject();
     newUser.password = null;
     res.status(200).json(newUser);
   });
 },

 me: function(req, res, next) {
   if (!req.user) return res.status(401).send('current user not defined');
   req.user.password = null;
   return res.status(200).json(req.user);
 },

 update: function(req, res, next) {
   User.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
     if (err) next(err);
     res.status(200).send('user updated');
   });
 },

  // LOGIN //

  logIn: function(req, res, next) {
    console.log('userCtrl.logIn');

  },

  newLogIn: function(req, res, next) {
    console.log('userCtrl.newLogIn');

  },

  // SIGNUP //

  signup: function(req, res, next) {
    console.log('userCtrl.signup');

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
    if (!req.user) { currentUser = "56b2bbb56e1efb88a85c2b40"; }

    User.findById(currentUser)
      .populate('reviewIds')
      .exec(function(err, result) {
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
    if (!req.user) { currentUser = "56b2bbb56e1efb88a85c2b40"; }

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
    if (!req.user) { currentUser = "56b2bbb56e1efb88a85c2b40"; }

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

  find: function(req, res, next) {
    console.log('userCtrl.find');
    var currentUser = req.user;
    if (!req.user) { currentUser = "56b2bbb56e1efb88a85c2b40"; }

    console.log(req.params.email);
    User.find({ email: req.params.email }, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });

  },

//every time you want to update the user object:

  update: function(req, res, next) { //**
    console.log('userCtrl.friend');
    var currentUser = req.user;
    if (!req.user) { currentUser = "56b2bbb56e1efb88a85c2b40"; }

    User.findByIdAndUpdate(currentUser, req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });

  }

};
