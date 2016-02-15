angular.module('reviewnicorn').controller('homeCtrl', function($scope, user) {

    $scope.user = user;

    // $scope.review = {
    //   "price":1,
    //   "stars":4,
    //   "locationId":{
    //     "name":"Babar Barbershop",
    //     "hours":"Permanently Closed",
    //     "category":"Barbershop",
    //     "phoneNumber":"801-555-5555",
    //     "website":"babarthebarber.com",
    //     "address":{
    //       "line1":"1210 N 1500 S",
    //       "line2":"#11",
    //       "city":"Provo",
    //       "state":"UT",
    //       "zip":84606,
    //       "country":"USA"}
    //     },
    //     "dateAdded":"2016-02-14T22:42:04.049Z",
    //     "romantic":false,
    //     "text":"Great prices, and pretty decent haircut given that Babar is an actual elephant."
    //   }

    $scope.city = "Salt Lake City";

});
