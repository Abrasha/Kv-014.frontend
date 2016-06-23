(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('housesFactory', housesFactory);

  /* @ngInject */
  function housesFactory($http, exception, API_URL, FILTER) {
    var service = {
      getHouses: getHouses,
      getAnimals: getAnimals,
      updateHouse: updateHouse,
      createHouse: createHouse,
      deleteHouse: deleteHouse,
      getPopulations: getPopulations
    };

    return service;

    function deleteHouse(house) {
      return $http.delete(API_URL.HOUSES + house.id)
        .then(success)
        .catch(fail);

      function success(response) {
        return response;
      }

      function fail() {
        return exception.catcher('XHR Failed for deleteHouse')(e);
      }
    }

    function updateHouse(house) {
        return $http.put(API_URL.HOUSES + house.id, house)
          .then(success)
          .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for updateHouse')(e);
      }
    }

    function createHouse(house) {
      return $http.post(API_URL.HOUSES, house)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for createHouse')(e);
      }
    }

    function getHouses() {

      return $http.get(API_URL.HOUSES)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getHouses')(e);
      }
    }

    function getAnimals(houseId) {

      return $http.get(API_URL.ANIMALS + "?" + FILTER.HOUSE_ID + houseId)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getAnimals')(e);
      }
    }

    function getPopulations() {
      return $http.get(API_URL.HOUSES_POPULATIONS)
        .then(success)
        .catch(fail);
    }

    function success(response) {
      return response.data;
    }

    function fail(e) {
      return exception.catcher('XHR Failed for getPopulations')(e);
    }
  }
})();
