var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/User');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, done) {
  User.findOne({ email: email })
  .exec(function(err, user) {
    console.log(user);
    if(err) done(err);
    if(!user) return done(null, false);
    if(user.verifyPassword(password)) {
      console.log("I should be logged in... Yes?", user);
      return done(null, user);}
    return done(null, false);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(_id, done) {
  User.findById(_id)
  .populate({
    path:'friendIds',
    model:'User',
    populate: {
      path: 'reviewIds',
      model: 'Review'
    }
  })
  .exec(function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
