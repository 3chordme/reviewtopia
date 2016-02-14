angular.module('reviewnicorn').controller('signupCtrl', function($scope, authService) {

  $scope.submit = function(userObj) {
    console.log('userCtrl $scope.submit fired');
    authService.register(userObj);
  };

});
