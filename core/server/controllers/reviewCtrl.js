var Review = require('./../models/Review');

module.exports = {

  destroy: function(req, res, next) {
    console.log('reviewCtrl.destroy');

    Review.findByIdAndRemove(req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  feed: function(req, res, next) {

  },

  publish: function(req, res, next) {
    console.log('reviewCtrl.publish');

    var newReview = new Review(req.body);
    newReview.save(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  cityFeed: function(req, res, next) {

  },

  userFeed: function(req, res, next) {

  },

  locationFeed: function(req, res, next) {

  }

};
