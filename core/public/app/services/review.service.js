angular.module('reviewnicorn').service('reviewService', function($state, $http, authService) {

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

  this.addReview = function(review) {
    //this should find the user and add a review id
    console.log('reviewService.addReview is firing');

    return $http({
      method: 'PUT',
      url: 'user/update',
      data: {'$push': {'reviewIds':review._id}}
    })
    .then(function(response) {
      console.log(".then...", response);
      $state.go('home');
      return authService.addNewReview(response);
    });
  };

});
