angular.module('reviewnicorn').service('reviewService', function($state, authService) {

  var userId = ""
  , locationId = "";

  this.getUser = function(user) {
    currentUser = user;
  };

  this.getLocation = function(location) {
    currentLocation = location;
  };

});
