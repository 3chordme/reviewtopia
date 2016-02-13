angular.module('reviewnicorn').controller('reviewCtrl', function($scope, authService, locationService) {

    // $scope.test = "Success!";

    var myUser = authService.myUser();

    $scope.selectLocation = function(location) {
      //for now, selectLocation will trigger newLocation
      //later we can use addLocation on the commented out add button
        locationService.newLocation(location);
        console.log('locationService.newLocation added', location);

    };

    $scope.submitReview = function(review) {
      review.userId = myUser._id;
      // review.locationId =
      console.log('submitReview firing\n', review);
    };

});
