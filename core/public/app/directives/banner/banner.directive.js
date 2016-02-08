angular.module('reviewnicorn').directive('banner', function() {

  return {
      templateUrl: './directives/banner/banner.dirtmpl.html'
    , restrict: 'E'
    , scope: {
          dirTest: "=" //two-way binding, becomes equal to var on (parent) ctrl's scope
        , dirExample: "@" //becomes string
        //& is used for functions
      }
  };

});
