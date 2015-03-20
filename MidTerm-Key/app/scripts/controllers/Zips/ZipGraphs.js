/**
 * Created by charlie on 2/11/15.
 */

var mod = angular.module("statesApp");


mod.controller("ZipGraphController", function ($scope, $http, httpCensus, chartFactory) {

    'use strict';

    var chartTitle = 'The relative population of the top five states';
    var graphType;
    $scope.chartSelect = chartFactory.chartSelect;
    $scope.chartTypeUpdate = chartFactory.chartTypeUpdate;


    function setGraphRange(sliceSize, response) {
        switch (graphType) {
            case 'top':
                chartTitle = "Top states";
                $scope.zipSliceStart = 0;
                $scope.zipSliceStop = sliceSize;
                break;

            case 'bottom':
                chartTitle = "Bottom States";
                $scope.zipSliceStart = response.length - sliceSize;
                $scope.zipSliceStop = response.length;
                break;
        }
    }

    function getDataToGraph(response) {
        return response.slice($scope.zipSliceStart, $scope.zipSliceStop);
    }

    function defineGoogleChartData(sliceSize, dataToGraph) {
        var topStates = [];
        for (var i = 0; i < sliceSize; i++) {
            if (dataToGraph[i][0] !== 0) {
                topStates.push({
                    c: [
                        {v: dataToGraph[i][2] + ':' + dataToGraph[i][0]},
                        {v: parseInt(dataToGraph[i][0])}
                    ]
                });
            }
        }
        return topStates;
    }

    $scope.numberToGraph = 5;

    $scope.getZips = function (graphTypeInit) {

        graphType = graphTypeInit;

        httpCensus.callCensus('53', '*', true).then(function (fullResponse) {
            var response = fullResponse.data;

            setGraphRange($scope.numberToGraph, response);
            var dataToGraph = getDataToGraph(response);
            var googleChartData = defineGoogleChartData($scope.numberToGraph, dataToGraph);
            $scope.chartObject = chartFactory.getChart(googleChartData, chartTitle);

        });
    }

});
