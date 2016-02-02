var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var reviewSchema = mongoose.Schema({

    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  , locationId: [{ type: Schema.Types.ObjectId, ref: 'Location' }]
  , stars: { type: Number }
  , text: { type: String }
  , price: { type: Number }
  , romantic: { type: Boolean }
  , dateAdded: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Review', reviewSchema);
