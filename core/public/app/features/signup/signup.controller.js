angular.module('reviewnicorn').controller('signupCtrl', function($scope, authService) {

  $scope.signupCtrlTest = "Success!";

  // $scope.user = {
  //   username: "bRockAndRoll",
  //   email: "b00tyguard@ventureindustries.net",
  //   password: "b",
  //   name: "Brock Sampson",
  //   profileImage: "http://www.sideshowtoy.com/wp-content/uploads/2013/06/200105-product-thumb.jpg"
  // };

  $scope.submit = function(userObj) {
    console.log('userCtrl $scope.submit fired');
    authService.register(userObj);
  };

});
