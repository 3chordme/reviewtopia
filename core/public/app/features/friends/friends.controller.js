angular.module('reviewnicorn').controller('friendsCtrl', function($scope, authService) {

  $scope.user = authService.myUser();

  $scope.findFriend = function(email) {
    
  };

});
