angular.module('reviewnicorn')

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: './../features/login/login.ctrltmpl.html',
        controller: 'loginCtrl'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: './../features/signup/signup.ctrltmpl.html',
        controller: 'signupCtrl'
      })

      .state('profile', {
        url: '/profile',
        templateUrl: './../features/profile/profile.ctrltmpl.html',
        controller: 'profileCtrl',
        resolve: {
          user: function(authService, $state) {
            return authService.currentUser()
              .then(function(data) {
                if (data.status !== 200) {
                  $state.go('login');
                }
                return data.data;
              })
          }
        }
      })

      .state('home', {
        url: '/home',
        templateUrl: './../features/home/home.ctrltmpl.html',
        controller: 'homeCtrl'
      })

      .state('friends', {
        url: '/friends',
        templateUrl: './../features/friends/friends.ctrltmpl.html',
        controller: 'friendsCtrl'
      })

      .state('review', {
        url: '/review',
        templateUrl: './../features/review/review.ctrltmpl.html',
        controller: 'reviewCtrl'
      });
      //cityReviews
      //locationReviews
      //userReviews
    $urlRouterProvider.otherwise('/home');

  });
