/**
 * Created by charliecalvert on 2/8/15.
 */


describe('Controller: StatePopulation Mocks', function () {

    'use strict';

    var expect = chai.expect;

    var allStates, stateGraphController, scope;
    var $http, $httpBackend;

    // load the controller's module
    beforeEach(function() {
        module('statesApp');
        module('googlechart');
    });

    beforeEach(inject(function(_$http_, _$httpBackend_) {
        $http = _$http_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        stateGraphController = $controller('StateGraphController', {
            $scope: scope
        });
        // formatted at: http://jsonformatter.curiousconcept.com/
        allStates = [["P0010001", "NAME", "state"], ["4779736", "Alabama", "01"], ["710231", "Alaska", "02"], ["6392017", "Arizona", "04"], ["2915918", "Arkansas", "05"], ["37253956", "California", "06"], ["5029196", "Colorado", "08"], ["3574097", "Connecticut", "09"], ["897934", "Delaware", "10"], ["601723", "District of Columbia", "11"], ["18801310", "Florida", "12"], ["9687653", "Georgia", "13"], ["1360301", "Hawaii", "15"], ["1567582", "Idaho", "16"], ["12830632", "Illinois", "17"], ["6483802", "Indiana", "18"], ["3046355", "Iowa", "19"], ["2853118", "Kansas", "20"], ["4339367", "Kentucky", "21"], ["4533372", "Louisiana", "22"], ["1328361", "Maine", "23"], ["5773552", "Maryland", "24"], ["6547629", "Massachusetts", "25"], ["9883640", "Michigan", "26"], ["5303925", "Minnesota", "27"], ["2967297", "Mississippi", "28"], ["5988927", "Missouri", "29"], ["989415", "Montana", "30"], ["1826341", "Nebraska", "31"], ["2700551", "Nevada", "32"], ["1316470", "New Hampshire", "33"], ["8791894", "New Jersey", "34"], ["2059179", "New Mexico", "35"], ["19378102", "New York", "36"], ["9535483", "North Carolina", "37"], ["672591", "North Dakota", "38"], ["11536504", "Ohio", "39"], ["3751351", "Oklahoma", "40"], ["3831074", "Oregon", "41"], ["12702379", "Pennsylvania", "42"], ["1052567", "Rhode Island", "44"], ["4625364", "South Carolina", "45"], ["814180", "South Dakota", "46"], ["6346105", "Tennessee", "47"], ["25145561", "Texas", "48"], ["2763885", "Utah", "49"], ["625741", "Vermont", "50"], ["8001024", "Virginia", "51"], ["6724540", "Washington", "53"], ["1852994", "West Virginia", "54"], ["5686986", "Wisconsin", "55"], ["563626", "Wyoming", "56"], ["3725789", "Puerto Rico", "72"]];
    }));

    function getData() {
        $httpBackend.whenGET(scope.url).respond(allStates);
        stateGraphController.getAllStates();
        $httpBackend.flush();
    }

    it('should get 52 states', function() {
        getData();
        expect(stateGraphController.allStates.length).to.equal(52);
    });

    it('should get 10 states in topStates by default', function() {
        getData();
        expect(stateGraphController.topStates.length).to.equal(10);
    });

    it('should be able get 15 states in topStates', function() {
        $httpBackend.whenGET(scope.url).respond(allStates);
        stateGraphController.getStatesSlice('Top Fifteen States', 0, 15);
        $httpBackend.flush();

        expect(stateGraphController.topStates.length).to.equal(15);
    });

    it('should have California, Texas and New York in top 10 by default', function() {
        getData();
        expect(stateGraphController.topStates[0].c[0].v).to.equal('California');
        expect(stateGraphController.topStates[1].c[0].v).to.equal('Texas');
        expect(stateGraphController.topStates[2].c[0].v).to.equal('New York');
        expect(stateGraphController.topStates[9].c[0].v).to.equal('North Carolina');
    });

    it('should get 5 states in topStates with stateSliceStop', function() {
        $httpBackend.whenGET(scope.url).respond(allStates);
        // getTopFiveStates();
        stateGraphController.getStatesSlice('Top Five States', 0, 5);
        $httpBackend.flush();

        expect(stateGraphController.topStates.length).to.equal(5);
    });

    it('should get 3 states in topStates with stateSliceStart and stateSliceStop', function() {
        stateGraphController.stateSliceStart = 2;
        stateGraphController.stateSliceStop = 5;
        getData();
        expect(stateGraphController.topStates.length).to.equal(3);
    });

    it('should get state with smallest population stateSliceStart and stateSliceStop', function() {
        stateGraphController.stateSliceStart = 51;
        stateGraphController.stateSliceStop = 52;
        getData();
        expect(stateGraphController.topStates.length).to.equal(1);
        expect(stateGraphController.topStates[0].c[0].v).to.equal('Wyoming');
    });

    it('should get state with smallest population stateSliceStart and stateSliceStop', function() {
        stateGraphController.stateSliceStart = 42;
        stateGraphController.stateSliceStop = 52;
        getData();
        expect(stateGraphController.topStates.length).to.equal(10);
        expect(stateGraphController.topStates[0].c[0].v).to.equal('New Hampshire');
        expect(stateGraphController.topStates[9].c[0].v).to.equal('Wyoming');
    });

});
