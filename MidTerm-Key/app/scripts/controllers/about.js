"use strict";

/**
 * @ngdoc function
 * @name myAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAppApp
 */
angular.module("statesApp")
    .controller("AboutController", function($scope) {
        $scope.awesomeThings = [
            "HTML5 Boilerplate",
            "AngularJS",
            "Karma"
        ];

    });
