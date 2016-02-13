var Location = require('./../models/Location');

module.exports = {

  newLocation: function(req, res, next) {
    console.log('locationCtrl.newLocation');

    var newLocation = new Location(req.body);
    newLocation.save(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log('locationCtrl.newLocation submitted', result);

        res.send(result);
      }
    });
  }

};
