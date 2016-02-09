var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , bcrypt = require('bcryptjs');

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

//bcrypt
userSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password'))    return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

userSchema.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', userSchema);
