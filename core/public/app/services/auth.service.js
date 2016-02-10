angular.module('reviewnicorn')
  .service('authService', function($state, $http) {

    this.login = function(user) {
      console.log('authService.login has fired', user);

      return $http({
        method: 'POST',
        url: '/login',
        data: user
      })
      .then(function(response) {
        console.log(response);
        $state.go('home');
      });

    };

});
