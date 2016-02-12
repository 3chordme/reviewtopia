angular.module('reviewnicorn').directive('banner', function() {

  return {
      templateUrl: './directives/banner/banner.dirtmpl.html'
    , restrict: 'E'
    , controller: function($scope, $state, authService) {
      $scope.logout = function() {
        authService.logout();
        var user = authService.myUser()
        console.log(user)
        console.log("I think you are logged out now?");
        $scope.user = null;
      };
    }
  };

});
