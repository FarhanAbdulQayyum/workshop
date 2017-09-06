'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ui.router',
    'ngAnimate',
    'app.customer',
    'app.dashboard'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'base.html'
      })
  });
