angular.module('reviewnicorn')
  .service('authService', function($state, $http) {

    this.login = function(user) {
      console.log('authService.login is logging in:', user);
      return $http({
        method: 'POST',
        url: '/login',
        data: user
      })
      .then(function(response) {
        $state.go('home');
      });
    };

    this.logout = function() {
      console.log('authService.logout is logging out');

      return $http({
        method: 'GET',
        url: '/logout',
      })
      .then(function(response) {
        $state.go('login');
      });
    };

    this.currentUser = function() {
      return $http({method: 'GET', url: '/me'})
        .then (function(data) {
          console.log('data.data is:', data.data);
          return data;
        });
      };
});
