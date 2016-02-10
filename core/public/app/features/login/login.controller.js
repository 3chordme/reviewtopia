angular.module('reviewnicorn').controller('loginCtrl', function($scope, authService) {

  $scope.login = function(user) {
      authService.login(user);
  };

});
