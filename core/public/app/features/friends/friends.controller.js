angular.module('reviewnicorn').controller('friendsCtrl', function($scope, authService) {

  console.log(authService.myUser);

  $scope.user = authService.myUser();

});
