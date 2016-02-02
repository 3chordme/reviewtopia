var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({

    name: { type: String }
  , address: {}
  , hours: { type: String }
  , category: { type: String }
  , subcategory: { type: String }
  , phoneNumber: { type: String }
  , website: { type: String }
  
});

module.exports = mongoose.model('Location', locationSchema);
