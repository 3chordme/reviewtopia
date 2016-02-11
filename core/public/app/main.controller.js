angular.module('reviewnicorn').controller('mainCtrl', function($scope, authService, $state) {

    $scope.test = "Success!";

    $scope.user = {
      reviewIds: [],
      friendIds:
       [ "56b23efb9404a9f596d2ecfe",
         "56b238089404a9f596d2ecfd",
         "56b11080ec02777582c60ed7",
         "56b10d0d4272d825814a0e33" ],
      citiesReviewed: [],
      __v: 0,
      profileImage: 'https://github.com/images/error/angry_unicorn.png',
      name: 'p',
      password: 'p',
      // password: '$2a$10$HD/bmVKoQKZsrqoqtupaSuTdB65xFx2MW3iSOiAPuR3uEa0vOVd4.',
      email: 'p@p.p',
      username: 'pqrstu',
      _id: "56bbc83a78a63f2251d3c7b3"
    };

    $scope.logout = function() {
      authService.logout();
      console.log("I think you are logged out now?");
      $scope.user = null;
    };

});
