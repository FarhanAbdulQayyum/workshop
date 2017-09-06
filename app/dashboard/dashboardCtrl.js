'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of app
 */
angular.module('app')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;

  });
