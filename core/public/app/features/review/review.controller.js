angular.module('reviewnicorn').controller('reviewCtrl', function($scope, authService, reviewService) {

    // $scope.test = "Success!";

    var myUser = authService.myUser();

    $scope.selectLocation = function(location) {
      //for now, selectLocation will trigger newLocation
      //later we can use addLocation on the commented out add button
      reviewService.newLocation(location);
      console.log('reviewService.newLocation added', location);
      //do I need a .then here? Looks like maybe I should have set my location object here instead of having a separate function for that.
    };

    $scope.submitReview = function(review) {
      console.log('myUser', myUser);

      review.userId = myUser._id;
      var currentLocationId = reviewService.currentLocation()._id;
      review.locationId = currentLocationId;

      console.log('review', review);

      reviewService.newReview(review);

    };

});
