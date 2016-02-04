var express = require('express')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , cors = require('cors');

var userCtrl = require('./controllers/userCtrl');
var reviewCtrl = require('./controllers/reviewCtrl');
var locationCtrl = require('./controllers/locationCtrl');

var app = express();
app.use(express.static(__dirname + '/../public'));

var mongoUri = 'mongodb://localhost:27017/reviewsful';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to', mongoUri);
});

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

  ////////
  //USER//
  ////////

// LOGIN
app.put('/user', userCtrl.logIn);
app.get('/user', userCtrl.newLogIn);

// SIGNUP
app.post('/user', userCtrl.signUp); //working (dummy data)

// PROFILE
app.get('/user/profile', userCtrl.view); //working (dummy data)
app.delete('/user', userCtrl.destroy); //working (dummy data)

//FRIENDS
app.get('/user/friends', userCtrl.show); //working (dummy data)
app.get('/user/friends/:email', userCtrl.find); //working (dummy data)

//every time you want to update the user object:
app.put('/user/update', userCtrl.update);

  //////////
  //REVIEW//
  //////////

//PROFILE
app.delete('/reviews', reviewCtrl.destroy); //works

//HOME
app.get('/reviews', reviewCtrl.feed);

//REVIEW
app.post('/reviews', reviewCtrl.publish); //working (dummy data)

//CITY REVIEWS
app.get('/reviews/city/:city', reviewCtrl.cityFeed);

//USER REVIEWS
app.get('/reviews/user/:user', reviewCtrl.userFeed);

// LOCATION REVIEWS
app.get('/reviews/location/:location', reviewCtrl.locationFeed);

  ////////////
  //LOCATION//
  ////////////

// REVIEW

//app.get('/location', locationCtrl.);
//app.post('/location', locationCtrl.);

var port = 3000;
app.listen(port, function() {
  console.log('Listening on', port);
});
