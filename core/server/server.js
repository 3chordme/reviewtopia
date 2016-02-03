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
app.put('/user/:id', userCtrl.unfriend);
app.get('/user/friends/:email', userCtrl.find); //working (dummy data)
app.post('/user/friends/:id', userCtrl.friend);

  //////////
  //REVIEW//
  //////////



  ////////////
  //LOCATION//
  ////////////


// LOGIN// SIGNUP// PROFILE// HOME// FRIENDS// REVIEW// REVIEWS BY CITY// REVIEWS BY USER

var port = 3000;
app.listen(port, function() {
  console.log('Listening on', port);
});
