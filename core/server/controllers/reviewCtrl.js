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
    //return all reviews that are written by currentUser's friends AND where location.city equals param/query
  },

  userFeed: function(req, res, next) {
    //return User info of param/query and all reviews that are written by param/query

  },

  locationFeed: function(req, res, next) {
    //return all reviews that are written by currentUser's friends AND where locationId equals param/query

  }

};
