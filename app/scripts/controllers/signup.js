'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('SignUpCtrl', function($scope, $location) {

    $scope.submit = function() {

      $location.path('/login');

      return false;
    }

  });
