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

app.post('/user', userCtrl.signup);

// IS IT BETTER TO ORGANIZE SERVER.JS BY SCHEMA OR FEATURE?
// LET'S TRY BY SCHEMA

  ////////
  //USER//
  ////////

// LOGIN

//put();
//get();

// SIGNUP


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
