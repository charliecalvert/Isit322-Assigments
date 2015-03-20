## Build

There is a file called **Aliases** which has an aliases in it called **runall**
that will build the project and launch it Chrome/Chromium:

```
#! /bin/bash

alias runall="npm install && bower install && grunt serve"
alias testall="npm install && bower install && grunt test"

```

To use these **Aliases**, do the following:

```
    source Aliases
    runall
```

If you want to test first, then:

```
    source Aliases
    testall
```
    
There is a script called RunOneTest:

```
#! /bin/bash

grunt test --grep='should attach a list of awesomeThings to the scope'
```

If you run this script it will load only the tests that contain the string
"should attach a list of of awesomeThings to the scope." All other tests
will be skipped.

## Notable

Probably the most interesting code is the reusable factory that runs 
the queries against the census. This code has a **promise** in it. 

This line is designed to check to see if a query (promise) has already been 
run and if we so, do we need to re-run it:

      if (!promise || zip !== saveZip) {

The logic should go like this: 

- Did we just run a query for the zip code? If so, return the previous results. 
- Did we not run any queries yet? If not, then run a query. 
- Did we run a query previously, but it was not for the correct zip code? If so, run a new query.

For some reason, I think this test does not always work. I'll try
to find time to revisit the issue.

We discussed this factory and **sortAndFilter** method at some length 
in class several weeks ago, and I wrote you more about it in the 
discussion area, I believe. 


```
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

```

**NOTE**: *For some reason I could not find this factory right away last 
Wednesday. It was sitting right in front of me, but I was tired at the 
time, I suppose.*

## Tests

To run the tests, type:

    grunt test
    
Sample run of tests as of March 20, 2015:

```
  Controller: About
    ✓ should attach a list of awesomeThings to the scope

  Controller: MainCtrl
    ✓ mainctrl should attach a list of awesomeThings to the scope

  Controller: StatePopulation Core
    ✓ should attach a list of awesomeThings to the scope

  Controller: StatePopulation Mocks
    ✓ should get 52 states
    ✓ should get 10 states in topStates by default
    ✓ should be able get 15 states in topStates
    ✓ should have California, Texas and New York in top 10 by default
    ✓ should get 5 states in topStates with stateSliceStop
    ✓ should get 3 states in topStates with stateSliceStart and stateSliceStop
    ✓ should get state with smallest population stateSliceStart and stateSliceStop
    ✓ should get state with smallest population stateSliceStart and stateSliceStop

Chromium 41.0.2272 (Ubuntu): Executed 11 of 11 SUCCESS (0.105 secs / 0.023 secs)

```
    
The tests use mocha and chai

Grunt should put the following in automatically, nevertheless, check to be sure the following
are in karma.conf.js **files**:

  'bower_components/jquery/dist/jquery.js',
  'bower_components/angular-google-chart/ng-google-chart.js',
  
When using Grunt, we don't usually modify the files section of 
**karma.conf.js**, but I may have taken some code out of there
which is disabled Grunt's interaction with **karma.conf.js**.
