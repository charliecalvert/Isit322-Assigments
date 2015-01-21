var chai = require('chai');
var expect = chai.expect;

var pc = require('../Source/ParseCsv.js');

describe("CSV Tests Warm-up Exercises", function () {
    'use strict';

    it("proves that true is true", function () {
        expect(true).to.equal(true);
    });

    it("tests if we can remove quotes", function () {
        var a = '"Tom","Frank",jack,3,"7"';

        var words = a.split(',');

        words = words.map(function (word) {
            return pc.removeFirstLastChar(word, '"');
        });

        expect(words[0]).to.equal('Tom');
    });

    it('proves parscsv convert returns json', function () {
        var convertToJson = new pc.ConvertToJson();
        var json = convertToJson.run('Data/IsitMeetings.csv', 'csv');
        expect(typeof json).to.equal('object');
    });

    it("proves json first record contains Sunday", function() {
        var convertToJson = new pc.ConvertToJson();
        var json = convertToJson.run('Data/IsitMeetings.csv', 'csv');
        expect(json[0].day).to.equal('Sunday');
    });
});