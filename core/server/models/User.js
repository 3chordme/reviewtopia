var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, minlength: 5, maxlength: 20}
  , email: {type: String, required: true}
  , password: {type: String, required: true}
  , name: {type: String, required: true}
  // , reviewIds: {}
  // , friendIds: {}
  // , citiesReviewed: {}
  // , profileImage: {}
});

module.exports = mongoose.model('User', userSchema);
