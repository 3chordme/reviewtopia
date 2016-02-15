angular.module('reviewnicorn').directive('review', function() {

  return {
      templateUrl: './directives/review/review.dirtmpl.html'
    , restrict: 'E'
    , scope: {
        review: '='
      },
      controller: function($scope) {
        $scope.hidden = true;

        $scope.toggleHide = function() {
          $scope.hidden = !$scope.hidden;
        }
      }
  };

});
