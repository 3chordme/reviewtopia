angular.module('reviewnicorn')

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      // .state('login', {
      //   url: '/login',
      //   templateUrl: './../features/login/loginTmpl.html',
      //   controller: 'loginCtrl'
      // })

      // .state('signUp', {
      //   url: '/sign-up',
      //   templateUrl: './../features/sign-up/signUpTmpl.html',
      //   controller: 'signUpCtrl'
      // })

      .state('profile', {
        url: '/profile',
        templateUrl: './../features/profile/profile.template.html',
        controller: 'profileCtrl'
      })

      .state('home', {
        url: '/home',
        templateUrl: './../features/home/home.template.html',
        controller: 'homeCtrl'
      })

      .state('friends', {
        url: '/friends',
        templateUrl: './../features/friends/friends.template.html',
        controller: 'friendsCtrl'
      })

      .state('review', {
        url: '/review',
        templateUrl: './../features/review/review.template.html',
        controller: 'reviewCtrl'
      });

    $urlRouterProvider.otherwise('/home');

  });
