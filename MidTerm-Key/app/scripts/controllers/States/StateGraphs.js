/**
 * Created by charlie on 2/11/15.
 */


var mod = angular.module("statesApp");


mod.controller("StateGraphController", function ($http, getUrl, chartFactory) {

    'use strict';

    var stateGraphController = this;

    var chartTitle = 'The relative population of the top five states';


    stateGraphController.stateSliceStart = 0;
    stateGraphController.stateSliceStop = 10;
    stateGraphController.topStates = [];
    stateGraphController.chartSelect = chartFactory.chartSelect;
    stateGraphController.chartTypeUpdate = chartFactory.chartTypeUpdate;



    function runChart() {
        stateGraphController.chartObject = chartFactory.getChart(stateGraphController.topStates, chartTitle);
    }

    function successAll(response) {
        response.splice(0, 1);

        stateGraphController.allStates = response;

        response.sort(function (a, b) {
            return b[0] - a[0];
        });

        var top5 = response.slice(stateGraphController.stateSliceStart, stateGraphController.stateSliceStop);
        // var top5 = response.splice(45, response.length);

        stateGraphController.topStates = [];

        for (var i = 0; i < top5.length; i++) {
            stateGraphController.topStates.push({
                c: [
                    {v: top5[i][1]},
                    {v: parseInt(top5[i][0])}
                ]
            });
        }
        runChart();
    }

    function errorFunc(responseData, textStatus, errorThrown) {
        $(stateGraphController.selectors[0]).html("GET failed." + JSON.stringify(responseData, null, 4) + textStatus + errorThrown);
    }


    var getAllStatesWorker = function (callback) {
        // var queryUrl = url;
        stateGraphController.url = getUrl(true);

        jQuery.support.cors = true;

        // Make async call to Census API service
        var response = $http.get(stateGraphController.url);
        response.success(callback);
        response.error(errorFunc);
    };

    stateGraphController.getAllStates = function () {
        chartTitle = 'All States';
        getAllStatesWorker(successAll);
    };

    stateGraphController.getStatesSlice = function(title, start, stop) {
        chartTitle = title;
        stateGraphController.stateSliceStart = start;
        stateGraphController.stateSliceStop = stop;
        getAllStatesWorker(successAll);
    };

    function supportsHtml5Storage() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    stateGraphController.saveStates = function () {
        getAllStatesWorker(function (data) {
            if (supportsHtml5Storage()) {
                var stringData = JSON.stringify(data);
                localStorage['statesData'] = stringData;
                console.log(stringData);
                $("#statesData").append('<li>Number of States: ' + data.length + '</li>');
            }
        });
    };

    stateGraphController.getLocalStates = function () {
        if (supportsHtml5Storage()) {
            var data = localStorage['statesData'];
            console.log('from local storage: ', data);
            data = JSON.parse(data);
            $("#statesData").append('<li>Number of States: ' + data.length + '</li>');
        }
    };


});
