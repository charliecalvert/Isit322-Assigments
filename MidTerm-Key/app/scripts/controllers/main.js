"use strict";

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module("statesApp")
    .controller("MainCtrl", function ($scope) {
        $scope.awesomeThings = [
            "HTML5 Boilerplate",
            "AngularJS",
            "Karma"
        ];

        $scope.connectionStatus = "Not connected to a device";

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            $scope.connectionStatus = "Connected to a device";
            console.log(cordova.file);
        }


        $scope.checkConnection = function () {
            if (typeof navigator.connection === 'undefined') {
                $scope.connectionStatus = 'undefined';
            } else {
                var networkState = navigator.connection.type;

                var states = {};
                states[Connection.UNKNOWN] = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI] = 'WiFi connection';
                states[Connection.CELL_2G] = 'Cell 2G connection';
                states[Connection.CELL_3G] = 'Cell 3G connection';
                states[Connection.CELL_4G] = 'Cell 4G connection';
                states[Connection.CELL] = 'Cell generic connection';
                states[Connection.NONE] = 'No network connection';

                $scope.connectionStatus = 'Connection type: ' + states[networkState];

            }

        };

    });
