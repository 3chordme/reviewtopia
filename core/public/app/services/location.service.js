angular.module('reviewnicorn').service('locationService', function($http) {

    this.newLocation = function(location) {
        return $http({
          method: 'POST',
          url: '/location',
          data: location
        })
        .then(function(response) {
          return response.data;
        });
    };

});
