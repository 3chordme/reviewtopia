var express = require('express')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , session = require('express-session')
  , cors = require('cors')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var userCtrl = require('./controllers/userCtrl');
var reviewCtrl = require('./controllers/reviewCtrl');
var locationCtrl = require('./controllers/locationCtrl');

var User = require('./models/User');

//CONFIG
var config = require('./config');

var app = express();
app.use(express.static(__dirname + '/../public/app'));

//PASSPORT
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

var passport = require('./services/passport');


//POLICIES
var isAuthed = function(req, res, next) {
  console.log(req.user);
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

var mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to', mongoUri);
});

//MIDDLEWARE
app.use(bodyParser.json());
// app.use(cors());

/////////////
//ENDPOINTS//
/////////////

function consoleLog (req, res, next) {
  console.log(req.body);
  next();
}

//registers a new user
app.post('/users', userCtrl.register);

//returns logged in user
app.get('/me', isAuthed, userCtrl.me);

//checks if they have logged in, if they have they can update themselves
app.put('/users/:_id', isAuthed, userCtrl.update);

//log in a previously registered user
app.post('/login', passport.authenticate('local', {successRedirect: '/me', failureRedirect: '/login'}));

//call this endpoint to log out user
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});

////////
//USER//
////////

// LOGIN
// app.put('/user', userCtrl.logIn);
// app.get('/user', userCtrl.newLogIn);

// SIGNUP
// app.post('/user', userCtrl.signup); //working (dummy data)

// PROFILE
app.get('/user/profile', isAuthed, userCtrl.view); //working (dummy data)
app.delete('/user', isAuthed, userCtrl.destroy); //working (dummy data)

//FRIENDS
app.get('/user', isAuthed, userCtrl.show); //working (dummy data)
app.get('/user/friends/:email', isAuthed, userCtrl.find); //working (dummy data)

//every time you want to update the user object:
app.put('/user/update', isAuthed, userCtrl.update); //working (dummy data);

//////////
//REVIEW//
//////////

//PROFILE
app.delete('/reviews', isAuthed, reviewCtrl.destroy); //works

//HOME
app.get('/reviews', isAuthed, reviewCtrl.feed);

//REVIEW
app.post('/reviews', isAuthed, reviewCtrl.publish); //working (dummy data)

//CITY REVIEWS
app.get('/reviews/city/:city', isAuthed, reviewCtrl.cityFeed);

//USER REVIEWS
app.get('/reviews/user/:user', isAuthed, reviewCtrl.userFeed);

// LOCATION REVIEWS
app.get('/reviews/location/:location', isAuthed, reviewCtrl.locationFeed);

////////////
//LOCATION//
////////////

// REVIEW

// app.get('/location', locationCtrl.);
app.post('/location', isAuthed, locationCtrl.newLocation);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on', port);
});
