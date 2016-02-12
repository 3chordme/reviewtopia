angular.module('reviewnicorn').controller('loginCtrl', function($scope, authService, $state) {

  $scope.login = function(user) {
        authService.login(user).then(function(res){
            $state.go('home')
        });
  };

});
