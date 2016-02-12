angular.module('reviewnicorn').directive('profile', function() {

  return {
      templateUrl: './directives/profile/profile.dirtmpl.html'
    , restrict: 'E'
    , scope: {
      user: '='
      }
  };

});
