/**
 * Created by charliecalvert on 2/8/15.
 */


describe('Controller: StatePopulation Core', function () {

    'use strict';

    var expect = chai.expect;

    var statePopulation, scope;

    // load the controller's module
    beforeEach(function() {
        module('statesApp');
        // module('googlechart');
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        statePopulation = $controller('StatePopulationsController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(statePopulation.selectors.length).to.equal(3);
    });
});
