/**
 * Created by charliecalvert on 1/13/15.
 */

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
        expect(true).toBe(true);
    });

    it("proves that ParseCsv.js exports two methods", function() {
        expect(methods.length).toBe(2);

    });

    it('proves that ParseCvs contains a method called ConvertToJson', function() {
        var index = methods.indexOf('ConvertToJson');
        expect(index).not.toBe(-1);
    });

    it('proves that ParseCvs contains a method called removeFirstLastChar', function() {
        expect(methods.indexOf("removeFirstLastChar")).not.toBe(-1);
    });

    it('proves that setFileType sets the SplitChar to the correct value for csv', function() {
        var splitChar = convertToJson.setFileType('csv');
        expect(splitChar).toBe(',');
    });

    it('proves that setFileType sets the SplitChar to the correct value for tsv', function() {
        var splitChar = convertToJson.setFileType('tsv');
        expect(splitChar).toBe('\t');
    });

    it('proves that readfile returns csv data converted to an array', function() {
        var csvFileData = convertToJson.readFile(fileName);
        expect(typeof csvFileData).toBe('object');
        expect(csvFileData[0].indexOf('meeting_id')).toBe(0);
    });

    it('proves that readfile returns csv data with 11 elements, the titles plus ten rows of data', function() {
        var csvFileData = convertToJson.readFile(fileName);
        expect(csvFileData.length).toBe(11);
    });

    it('proves that readfile returns csv data where the 11th row begins with "10"', function() {
        var csvFileData = convertToJson.readFile(fileName);
        expect(csvFileData[10].indexOf('"10"')).toBe(0);
    });

    it('proves that our header tokens for each column are correct', function() {
        convertToJson.setFileType('csv');
        convertToJson.readFile(fileName);
        var headerTokens = convertToJson.defineHeaderTokens();
        expect(headerTokens[0]).toBe('meeting_id');
        expect(headerTokens[1]).toBe('day');
        expect(headerTokens[2]).toBe('time');
        expect(headerTokens[3]).toBe('town');
        expect(headerTokens[4]).toBe('meeting_name');
        expect(headerTokens[5]).toBe('location');
        expect(headerTokens[6]).toBe('street_address');
        expect(headerTokens[7]).toBe('city');
        expect(headerTokens[8]).toBe('state');
        expect(headerTokens[9]).toBe('zip');
    });
});