/**
 * Created by charlie on 2/18/15.
 */


var mod = angular.module("statesApp");

mod.factory('httpCensus', function($http, zipUrlGraph) {
  var promise, saveZip;

  function sortAndFilter(response, removeZipsWithZeroPopulation) {

    response.data.sort(function (a, b) {
      return b[0] - a[0];
    });

    if (removeZipsWithZeroPopulation) {
      response.data = response.data.filter(function (item) {
        return (item[0] != 0);
      });
    }
  }

  function removeFirstItem(response) {
    response.data.splice(0, 1);
  }

  var httpCensus = {
    callCensus: function(state, zip, removeZipsWithZeroPopulation) {
      // var rerunQueryCheck = (zip === '*') ? !promise : (!promise || zip !== saveZip);
      if (!promise || zip !== saveZip) {
        saveZip = zip;
        // $http returns a promise, which has a then function, which also returns a promise
        var url = zipUrlGraph.getUrl(state, zip);

        promise = $http.get(url);
        promise.then(function (response) {
          removeFirstItem(response);
          sortAndFilter(response, removeZipsWithZeroPopulation);
        });
      }
      // Return the promise to the controller
      return promise;
    }
  };
  return httpCensus;
});
