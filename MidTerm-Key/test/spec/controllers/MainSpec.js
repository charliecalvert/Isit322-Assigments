'use strict';

describe('Controller: MainCtrl', function () {

    var expect = chai.expect;

    // load the controller's module
    beforeEach(module('statesApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('mainctrl should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).to.equal(3);
    });
});
