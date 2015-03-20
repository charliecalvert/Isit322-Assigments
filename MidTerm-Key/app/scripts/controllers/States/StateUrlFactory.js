/**
 * Created by charlie on 2/11/15.
 */


var mod = angular.module("utils");

mod.factory("getUrl", function urlFactory() {
  'use strict';

  function getUrl(getAllStates) {
    var statePick, populationType;
    var myKey = "f2be9166735a2e23ac561c42ebcec7dfecaafc44";
    if (getAllStates) {
      statePick = "&for=state:" +'*';
    } else {
      statePick = "&for=state:" + $("#statePick option:selected").attr("value");
    }

    populationType = $("#populationPick option:selected").attr("value");
    if (typeof populationType === 'undefined') {
      populationType = 'P0010001';
    }
    var queryUrl = "http://api.census.gov/data/2010/sf1?key=" + myKey +
      "&get=" + populationType + ",NAME" + statePick;
    return queryUrl;
  }

  return getUrl;
});
