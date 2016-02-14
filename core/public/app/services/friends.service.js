angular.module('reviewnicorn').service('friendsService', function($http, authService) {

    this.findFriend = function(email) {
    console.log('friendsService.findFriend is firing');
      return $http({
        method: 'GET',
        url: '/user/friends/' + email
      })
      .then(function(response) {
        console.log(".then...", response);
        var foundUser = response.data;
        return foundUser;
      });
    };

    this.addFriend = function(friend) {
      console.log('friendsService.addFriend is firing');

      return $http({
        method: 'PUT',
        url: 'user/update',
        data: {'$push': {'friendIds':friend._id}}
      })
      .then(function(response) {
        console.log(".then...", response);
        return authService.addNewFriend(friend);
      });
    };

    this.deleteFriend = function(friend) {
      return $http({
        method: 'PUT',
        url: 'user/update',
        data: {'$pull': {'friendIds':friend._id}}
      })
      .then(function(response) {
        console.log(".then...", response);
        return authService.deleteFriend(friend);
      });
    };

});
