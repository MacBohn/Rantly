'use strict';

/**
 * @ngdoc overview
 * @name ngAppApp
 * @description
 * # ngAppApp
 *
 * Main module of the application.
 */
angular
  .module('ngAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/rants', {
        templateUrl: 'views/rants.html',
        controller: 'RantsCtrl'
      })
      .when('/styleguide', {
        templateUrl: 'views/styleguide.html',
        controller: 'StyleguideCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
