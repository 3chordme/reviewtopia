angular.module('reviewnicorn').controller('loginCtrl', function($scope, authService) {

  $scope.login = function(user) {
      console.log(user);
      authService.login(user);
  };

});
