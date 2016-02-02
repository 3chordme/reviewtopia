var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    username: { type: String, required: true, minlength: 5, maxlength: 20 }
  , email: { type: String, required: true }
  , password: { type: String, required: true }
  , name: { type: String }
  , reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  , friendIds: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  , citiesReviewed: { type: Array }
  , profileImage: { type: String }
});

module.exports = mongoose.model('User', userSchema);
