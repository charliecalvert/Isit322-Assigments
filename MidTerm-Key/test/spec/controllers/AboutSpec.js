'use strict';

describe('Controller: About', function () {

    var expect = chai.expect;

    // load the controller's module
    beforeEach(module('statesApp'));

    var AboutCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('AboutController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).to.equal(3);
    });
});
