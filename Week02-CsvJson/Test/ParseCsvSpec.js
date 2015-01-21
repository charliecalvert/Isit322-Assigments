/**
 * Created by charliecalvert on 1/13/15.
 */

var chai = require('chai');
var expect = chai.expect;

var pc = require('../Source/ParseCsv.js');

describe("Parse CSV Tests", function () {
    'use strict';

    var json,
        methods,
        convertToJson,
        fileName = 'Data/IsitMeetings.csv';

    beforeEach(function () {
        convertToJson = new pc.ConvertToJson();
        json = convertToJson.run(fileName, 'csv');
        methods = [];
        for (var n in pc) {
            if (typeof pc[n] === 'function') {
                methods.push(n);
            }
        }
        methods.sort();
    });

    it("proves that true is true", function () {
        expect(true).to.equal(true);
    });

    it("proves that ParseCsv.js exports two methods", function() {
        expect(methods.length).to.equal(2);

    });

    it('proves that ParseCvs contains a method called ConvertToJson', function() {
        var index = methods.indexOf('ConvertToJson');
        expect(index).not.to.equal(-1);
    });

    it('proves that ParseCvs contains a method called removeFirstLastChar', function() {
        expect(methods.indexOf("removeFirstLastChar")).not.to.equal(-1);
    });

    it('proves that setFileType sets the SplitChar to the correct value for csv', function() {
        var splitChar = convertToJson.setFileType('csv');
        expect(splitChar).to.equal(',');
    });

    it('proves that setFileType sets the SplitChar to the correct value for tsv', function() {
        var splitChar = convertToJson.setFileType('tsv');
        expect(splitChar).to.equal('\t');
    });

    it('proves that readfile returns csv data converted to an array', function() {
        var csvFileData = convertToJson.readFile(fileName);
        expect(typeof csvFileData).to.equal('object');
        expect(csvFileData[0].indexOf('meeting_id')).to.equal(0);
    });

    it('proves that readfile returns csv data with 11 elements, the titles plus ten rows of data', function() {
        var csvFileData = convertToJson.readFile(fileName);
        expect(csvFileData.length).to.equal(11);
    });

    it('proves that readfile returns csv data where the 11th row begins with "10"', function() {
        var csvFileData = convertToJson.readFile(fileName);
        expect(csvFileData[10].indexOf('"10"')).to.equal(0);
    });

    it('proves that our header tokens for each column are correct', function() {
        convertToJson.setFileType('csv');
        convertToJson.readFile(fileName);
        var headerTokens = convertToJson.defineHeaderTokens();
        expect(headerTokens[0]).to.equal('meeting_id');
        expect(headerTokens[1]).to.equal('day');
        expect(headerTokens[2]).to.equal('time');
        expect(headerTokens[3]).to.equal('town');
        expect(headerTokens[4]).to.equal('meeting_name');
        expect(headerTokens[5]).to.equal('location');
        expect(headerTokens[6]).to.equal('street_address');
        expect(headerTokens[7]).to.equal('city');
        expect(headerTokens[8]).to.equal('state');
        expect(headerTokens[9]).to.equal('zip');
    });
});