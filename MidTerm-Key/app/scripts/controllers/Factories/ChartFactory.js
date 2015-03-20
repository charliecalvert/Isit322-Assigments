/**
 * Created by charlie on 2/10/2015.
 */

var mod = angular.module("utils", []);

/**
 * When you use this object, do this:
 *     $scope.chartSelect = chartFactory.chartSelect;
 *     $scope.chartTypeUpdate = chartFactory.chartTypeUpdate;
 */
mod.factory("chartFactory", function () {
    'use strict';

    var chartObject = {};

    function ChartFactory() {
        chartObject.type = 'PieChart';
    }

    // ChartFactory.prototype.chartObject = {};
    ChartFactory.prototype.getChart = function (topStates, chartTitle) {


        chartObject.data =
        {
            "cols": [
                {id: "t", label: "State", type: "string"},
                {id: "s", label: "Population", type: "number"}
            ],
            "rows": topStates
        };

        // chartObject.type = 'PieChart';
        chartObject.options = {
            'title': chartTitle
        };

        return chartObject;
    };

    ChartFactory.prototype.chartSelect = {
        "type": "select",
        "name": "Service",
        "value": "PieChart",
        "values": ["PieChart", "BarChart", "ColumnChart", "AreaChart", "LineChart", "Table"]
    };

    ChartFactory.prototype.chartTypeUpdate = function () {
        this.chartObject.type = this.chartSelect.value;
    };

    return new ChartFactory;
});

