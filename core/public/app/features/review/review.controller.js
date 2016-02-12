angular.module('reviewnicorn').controller('reviewCtrl', function($scope, authService) {

    // $scope.test = "Success!";

    var myUser = authService.myUser();

    $scope.submitReview = function(review) {
      review.userId = myUser._id;
      // review.locationId =
      console.log('submitReview firing\n', review);
    };

});
