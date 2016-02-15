angular.module('reviewnicorn').controller('loginCtrl', function($scope, authService, $state) {

  //user.email and user.password are ng-modeled on login.ctrltmpl.html

  $scope.user = {};

  // $scope.user.email = 'p@p.p';
  // $scope.user.password = 'p';

  $scope.login = function(user) {
        authService.login(user)
        .then(function(response){
            $state.go('home');
        });
  };

});
