'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngAppApp
 */
angular.module('ngAppApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
