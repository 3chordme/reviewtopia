var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({

    name: { type: String }
  , address: {
      line1: { type: String, required: true }
    , line2: { type: String }
    , city: { type: String, required: true }
    , state: { type: String, required: true }
    , zip: { type: Number, required: true }
    , country: { type: String, default: "USA" }
    }
  , hours: { type: String }
  , category: { type: String }
  , subcategory: { type: String }
  , phoneNumber: { type: String }
  , website: { type: String }

});

module.exports = mongoose.model('Location', locationSchema);
