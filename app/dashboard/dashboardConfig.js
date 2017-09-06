angular.module('app.dashboard', [])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/dashboard');
    $stateProvider
    .state('dashboard', {
        url: '/dashboard',
        parent: 'base',
        templateUrl: 'dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });
  }]);
