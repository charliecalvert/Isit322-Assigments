/**
 * Created by charlie on 2/18/15.
 */

var mod = angular.module("statesApp");

mod.controller("AllZipsController", function ($scope, $http, httpCensus) {
  'use strict';

  $scope.getAllZips = function () {
    httpCensus.callCensus('53', '*', false).then(function (fullResponse) {
      $scope.allZips = fullResponse.data;
    });
  };

});

