/**
 * Created by charlie on 2/11/15.
 */


var mod = angular.module("statesApp");


mod.controller("StateGraphController", function ($scope, $http, getUrl, chartFactory) {

    'use strict';

    var chartTitle = 'The relative population of the top five states';

    $scope.stateSliceStart = 0;
    $scope.stateSliceStop = 10;
    $scope.topStates = [];
    $scope.chartSelect = chartFactory.chartSelect;
    $scope.chartTypeUpdate = chartFactory.chartTypeUpdate;



    function runChart() {
        $scope.chartObject = chartFactory.getChart($scope.topStates, chartTitle);
    }

    function successAll(response) {
        response.splice(0, 1);

        $scope.allStates = response;

        response.sort(function (a, b) {
            return b[0] - a[0];
        });

        var top5 = response.slice($scope.stateSliceStart, $scope.stateSliceStop);
        // var top5 = response.splice(45, response.length);

        $scope.topStates = [];

        for (var i = 0; i < top5.length; i++) {
            $scope.topStates.push({
                c: [
                    {v: top5[i][1]},
                    {v: parseInt(top5[i][0])}
                ]
            });
        }
        runChart();
    }

    function errorFunc(responseData, textStatus, errorThrown) {
        $($scope.selectors[0]).html("GET failed." + JSON.stringify(responseData, null, 4) + textStatus + errorThrown);
    }


    var getAllStatesWorker = function (callback) {
        // var queryUrl = url;
        $scope.url = getUrl(true);

        jQuery.support.cors = true;

        // Make async call to Census API service
        var response = $http.get($scope.url);
        response.success(callback);
        response.error(errorFunc);
    };

    $scope.getAllStates = function () {
        chartTitle = 'All States';
        getAllStatesWorker(successAll);
    };

    $scope.getTopFifteenStates = function () {
        chartTitle = 'Top Fifteen States';
        $scope.stateSliceStart = 0;
        $scope.stateSliceStop = 15;

        getAllStatesWorker(successAll);
    };

    $scope.getTopFiveStates = function () {
        chartTitle = 'Top Five States';
        $scope.stateSliceStart = 0;
        $scope.stateSliceStop = 5;
        getAllStatesWorker(successAll);
    };

    $scope.getBottomTenStates = function () {
        chartTitle = 'Bottom Ten States';
        $scope.stateSliceStart = 42;
        $scope.stateSliceStop = 52;
        getAllStatesWorker(successAll);
    };

    function supportsHtml5Storage() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    $scope.saveStates = function () {
        getAllStatesWorker(function (data) {
            if (supportsHtml5Storage()) {
                var stringData = JSON.stringify(data);
                localStorage['statesData'] = stringData;
                console.log(stringData);
                $("#statesData").append('<li>Number of States: ' + data.length + '</li>');
            }
        });
    };

    $scope.getLocalStates = function () {
        if (supportsHtml5Storage()) {
            var data = localStorage['statesData'];
            console.log('from local storage: ', data);
            data = JSON.parse(data);
            $("#statesData").append('<li>Number of States: ' + data.length + '</li>');
        }
    };


});
