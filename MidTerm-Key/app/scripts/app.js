"use strict";

/**
 * @ngdoc overview
 * @name statesApp
 * @description
 * # statesApp
 *
 * Main module of the application.
 */


angular.module("statesApp", [
    "googlechart",
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "utils"
])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/main.html",
                controller: "MainCtrl"
            })
            .when("/about", {
                templateUrl: "views/about.html",
                controller: "AboutController"
            })
            .when("/stateZip", {
                templateUrl: "views/Zip/StateZip.html",
                controller: "ZipController"
                /* resolve: {
                 zipPopulation: zipController.zipPopulation
                 } */
            })
            .when("/allZips", {
                templateUrl: "views/Zip/AllZips.html",
                controller: "AllZipsController"
            })
            .when("/statePop", {
                templateUrl: "views/State/StatePopulations.html",
                controller: "StatePopulationsController",
                controllerAs: "statePopulations"
            })
            .when("/stateGraphs", {
                templateUrl: "views/State/StateGraphs.html",
                controller: "StateGraphController"
            })
            .when("/zipGraphs", {
                templateUrl: "views/Zip/ZipGraphs.html",
                controller: "ZipGraphController"
            })

            .otherwise({
                redirectTo: "/"
            });
    }).controller('HeaderController', function($scope, $location)
    {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });

