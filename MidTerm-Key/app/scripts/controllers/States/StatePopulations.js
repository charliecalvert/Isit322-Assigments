"use strict";

var mod = angular.module("statesApp");


mod.factory("getHttpData", function httpData() {

});



mod.controller("StatePopulationsController", function ($scope, $http, getUrl) {

    var statePopulations = this;

    statePopulations.bar = "garply";
    $scope.bar = "bar";

    statePopulations.selectors = [
        "#debug",
        "#countryName",
        "Karma"
    ];

    function successFunc(response) {
        // details(response);
        var foo = JSON.stringify(response);
        console.log(foo);
        statePopulations.response1 = response[0];
        statePopulations.response2 = response[1];
        var values = response[1];
        var pop = values[0];
        var name = values[1];
        //var FIPS = values[2];
        if (values.length === 3) {
            $scope.stateName = name;
        } else {
            $($scope.selectors[1]).text(name);
        }
        $scope.population = pop;
        // $scope.$apply();
    }

    var allStates = [["4779736", "Alabama", "01"], ["710231", "Alaska", "02"], ["6392017", "Arizona", "04"], ["2915918", "Arkansas", "05"], ["37253956", "California", "06"], ["5029196", "Colorado", "08"], ["3574097", "Connecticut", "09"], ["897934", "Delaware", "10"], ["601723", "District of Columbia", "11"], ["18801310", "Florida", "12"], ["9687653", "Georgia", "13"], ["1360301", "Hawaii", "15"], ["1567582", "Idaho", "16"], ["12830632", "Illinois", "17"], ["6483802", "Indiana", "18"], ["3046355", "Iowa", "19"], ["2853118", "Kansas", "20"], ["4339367", "Kentucky", "21"], ["4533372", "Louisiana", "22"], ["1328361", "Maine", "23"], ["5773552", "Maryland", "24"], ["6547629", "Massachusetts", "25"], ["9883640", "Michigan", "26"], ["5303925", "Minnesota", "27"], ["2967297", "Mississippi", "28"], ["5988927", "Missouri", "29"], ["989415", "Montana", "30"], ["1826341", "Nebraska", "31"], ["2700551", "Nevada", "32"], ["1316470", "New Hampshire", "33"], ["8791894", "New Jersey", "34"], ["2059179", "New Mexico", "35"], ["19378102", "New York", "36"], ["9535483", "North Carolina", "37"], ["672591", "North Dakota", "38"], ["11536504", "Ohio", "39"], ["3751351", "Oklahoma", "40"], ["3831074", "Oregon", "41"], ["12702379", "Pennsylvania", "42"], ["1052567", "Rhode Island", "44"], ["4625364", "South Carolina", "45"], ["814180", "South Dakota", "46"], ["6346105", "Tennessee", "47"], ["25145561", "Texas", "48"], ["2763885", "Utah", "49"], ["625741", "Vermont", "50"], ["8001024", "Virginia", "51"], ["6724540", "Washington", "53"], ["1852994", "West Virginia", "54"], ["5686986", "Wisconsin", "55"], ["563626", "Wyoming", "56"], ["3725789", "Puerto Rico", "72"]];
    var stateList = allStates.map(function(state) {
        return { "name": state[1], "value": state[2] }
    });

    $scope.states1 = {
        "type": "select",
        "name": "statesPick",
        "value": stateList[0],
        "values": stateList
    };

    $scope.states2 = {
        "type": "select",
        "name": "Service",
        "value": { "name": "Alabama", "value": "01"},
        "values": [ { "name": "Alabama", "value": "01"},  { "name": "Alabamas", "value": "02"}]
    };

    $scope.stateSelect = {
        "type": "select",
        "name": "Service",
        "value": {'name': 'total', 'value': 'P0010001'},
        "values": [ {"name": "total", "value": 'P0010001'},
            {"name": "whites", "value": 'P0080003'},
            {"name": "blacks",  "value": 'P0080004'},
            {"name": "asians",  "value":'P0080006'},
            {"name": "occupied_house",  "value": 'H00010001'},
            {"name": "house_units", "value":'H0100001'}]
    };

    $scope.stateTypeUpdate = function() {

    };


    function errorFunc(responseData, textStatus, errorThrown) {
        $($scope.selectors[0]).html("GET failed." + JSON.stringify(responseData, null, 4) + textStatus + errorThrown);
    }

    function getSelectedStatesWorker(callback) {
        // var queryUrl = url;
        $scope.url = getUrl(false);

        jQuery.support.cors = true;

        // Make async call to Census API service
        var response = $http.get($scope.url);
        response.success(callback);
        response.error(errorFunc);
    }

    $scope.getSelectedState = function() {
        getSelectedStatesWorker(successFunc);
    };

});

