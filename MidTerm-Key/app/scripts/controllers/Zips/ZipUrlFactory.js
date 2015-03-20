/**
 * Created by charlie on 2/18/15.
 */

var mod = angular.module("statesApp");

mod.factory('zipUrlGraph', function () {


  return {
    getUrl: function (state, zip) {
      var pieces = {
        url: "http://api.census.gov/data/2010/sf1?key=",
        key: "f2be9166735a2e23ac561c42ebcec7dfecaafc44&get=P0010001",
        zip: "&for=zip+code+tabulation+area:" + zip,
        state: "&in=state:" + state
      };

      return pieces.url + pieces.key + pieces.zip + pieces.state;
    }
  }
});
