angular.module('reviewnicorn').directive('review', function() {

  return {
      templateUrl: './directives/review/review.dirtmpl.html'
    , restrict: 'E'
    , scope: {
        review: '='
      },
      controller: function($scope) {
        $scope.hidden = false;

        $scope.toggleHide = function() {
          $scope.hidden = !$scope.hidden;
        };
      }
  };

});
