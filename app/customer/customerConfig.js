angular.module('app.customer', [])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/dashboard');
    $stateProvider
    .state('customerList', {
        url: '/customerList',
        parent: 'dashboard',
        templateUrl: 'customer/list/customerList.html',
        controller: 'CustomerListCtrl'
      })
      .state('customerEdit', {
        url: '/customerEdit',
        parent: 'dashboard',
        templateUrl: 'customer/edit/customerEdit.html',
        controller: 'CustomerEditCtrl'
      });
  }]);
