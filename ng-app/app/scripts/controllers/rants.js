'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:AboutCtrl
 * @description
 * # RantsCtrl
 * Controller of the ngAppApp
 */
angular.module('ngAppApp')
  .controller('RantsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
