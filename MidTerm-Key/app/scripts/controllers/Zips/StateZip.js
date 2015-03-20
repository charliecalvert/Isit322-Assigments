/**
 * Created by charliecalvert on 2/1/15.
 */

"use strict";

var statesApp = angular.module("statesApp");


var zipController = statesApp.controller("ZipController", function ($scope, $http, httpCensus) {

  $scope.stateName = 'uknown';
  $scope.population = "0";
  $scope.response = "";
  $scope.zipCode = "98007";

  $scope.getZipData = function() {

    function handleSuccess(response) {
      if (response.status == 200) {
        $scope.response1 = response.data[0];
        $scope.response2 = response.data[1];
        $scope.data = JSON.stringify(response, null, 4);
        var values = response.data[1];
        $scope.stateName = values[2];
        $scope.population = values[0];
      } else {
        $scope.data = '';
        $scope.debug = "Could not find zip code: " + $scope.zipCode;
      }
    }

    httpCensus.callCensus('53', $scope.zipCode, false).then(function(response) {
      handleSuccess(response);
    }, function (data, status, headers, config) {
      var message = "GET failed." + JSON.stringify(data, null, 4);
      console.log(message);
      $scope.debug = message;
      console.log(status);
      console.log(headers);
      console.log(config);

    });
  };

  $scope.clearData = function() {
    $scope.data = {};
  };

});

