angular.module('reviewnicorn').controller('loginCtrl', function($scope, authService, $state) {

  //user.email and user.password are ng-modeled on login.ctrltmpl.html

  $scope.login = function(user) {
        authService.login(user)
        .then(function(response){
            // $scope.$apply();
            $state.go('home');
        });
  };

});
