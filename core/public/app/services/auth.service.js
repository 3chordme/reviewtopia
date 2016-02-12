angular.module('reviewnicorn')
  .service('authService', function($state, $http) {

    var myUser = {};

    this.login = function(user) {
      console.log('authService.login is logging in:', user);
      return $http({
        method: 'POST',
        url: '/login',
        data: user
      })
      .then(function(response) {
        console.log(".then...", response.data);
        myUser = response.data;
        return response.data;
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
      .then (function(response) {
        console.log('currentUser\nresponse.data is:', response.data);
        return response;
      });
    };

    this.myUser = function() {
      return myUser;
    }

    this.register = function(userObj) {
      return $http({method: 'POST', url: '/users', data:userObj})
      .then (function(response) {
        console.log('register\nresponse.data is:', response.data);
        $state.go('login');
        return response;
      });
    };

});
