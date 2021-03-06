(function () {
  'use strict';

  angular
    .module('app.warehouses')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'warehouses',
        config: {
          url: '/warehouses',
          templateUrl: 'app/warehouses/warehouses.html',
          controller: 'WarehousesController',
          controllerAs: 'vmWarehouses',
          title: 'warehouses',
          abstract: true,
          settings: {
            needSignIn: true
          }
        }
      },
      {
        state: 'warehouses.supply',
        config: {
          url: '/:name',
          templateUrl: 'app/warehouses/supply.html',
          controller: 'SupplyController',
          controllerAs: 'vmSupply',
          title: 'supply',
          settings: {
            nav: 3,
            content: '<i class="fa fa-cubes"></i>Warehouses',
            needSignIn: true
          }
        }
      }
    ]
      ;
  }
})();
