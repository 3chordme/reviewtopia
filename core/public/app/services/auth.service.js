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
        return myUser;
      });
    };

    this.logout = function() {
      console.log('authService.logout is logging out');

      return $http({
        method: 'GET',
        url: '/logout',
      })
      .then(function(response) {
        myUser = null;
      });
    };

    this.currentUser = function() {
    return $http({
      method: 'GET',
      url: '/me'})
      .then (function(response) {
        console.log('currentUser\nresponse.data is:', response.data);
        return response;
      });
    };

    this.myUser = function() {
      return myUser;
    };

    this.addNewFriend = function(friend) {
      myUser.friendIds.push(friend);
      return myUser;
    };

    this.deleteFriend = function(friend) {
      console.log('Friends: ', myUser.friendIds);
      console.log('Looking for: ', friend);
      for (var i = 0; i < myUser.friendIds.length; i++) {
        if (myUser.friendIds[i]._id === friend._id) {
          console.log('user has been deleted', myUser);

          myUser.friendIds.splice(i, 1);
        }
      }
      return myUser;
    };

    this.addNewReview = function(response) {
      if (!myUser.reviewIds) {
        myUser.reviewIds = [];
      }
      myUser.reviewIds.push(response.data._id);
      return myUser;
    };

    this.register = function(userObj) {
      return $http({method: 'POST', url: '/users', data:userObj})
      .then (function(response) {
        console.log('register\nresponse.data is:', response.data);
        $state.go('login');
        return response;
      });
    };

});
