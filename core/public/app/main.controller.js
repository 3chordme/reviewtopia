angular.module('reviewnicorn').controller('mainCtrl', function($scope, authService, $state) {

    $scope.test = "Success!";

    $scope.logout = function() {
      authService.logout();
      console.log("I think you are logged out now?");
    };
});
