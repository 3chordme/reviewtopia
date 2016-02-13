angular.module('reviewnicorn').service('reviewService', function($state, $http) {

  var currentLocation = {};

  this.newLocation = function(location) {
      return $http({
        method: 'POST',
        url: '/location',
        data: location
      })
      .then(function(response) {

        currentLocation = response.data;
        return response.data;
      });
  };

  // this.getUser = function(user) {
  //   currentUser = user;
  // };

  this.currentLocation = function() {
    return currentLocation;
  };

  this.newReview = function(review) {
    return $http({
      method: 'POST',
      url: '/reviews',
      data: review
    })
    .then(function(response) {
      return response.data;
    });
  };

});
