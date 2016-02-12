var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var reviewSchema = mongoose.Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'User' } //do I need to use a Schema? Should I just put "reviewer"?
  , locationId: { type: Schema.Types.ObjectId, ref: 'Location' }
  , stars: { type: Number, required: true }
  , text: { type: String, default: '' }
  , price: { type: Number }
  , romantic: { type: Boolean, default: false }
  , dateAdded: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Review', reviewSchema);
