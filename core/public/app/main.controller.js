angular.module('reviewnicorn').controller('mainCtrl', function($scope, authService) {

  $scope.user = authService.currentUser();

});
