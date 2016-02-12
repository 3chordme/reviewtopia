angular.module('reviewnicorn').controller('friendsCtrl', function($scope, authService, friendsService) {

  $scope.user = authService.myUser();

  $scope.foundUsers = [];

  $scope.findFriend = function(email) {
    friendsService.findFriend(email)
    .then(function(response) {
      $scope.foundUsers.push(response[0]);
    });
  };

  $scope.addFriend = function(friend) {
    friendsService.addFriend(friend)
    .then(function(response) {
      console.log('.then response', response);
      $scope.user = response;
    });
  };

  $scope.deleteFriend = function(friend) {
    friendsService.deleteFriend(friend)
    .then(function(response) {
      console.log('.then response',response);
      $scope.user = response;
    });
  };
});
