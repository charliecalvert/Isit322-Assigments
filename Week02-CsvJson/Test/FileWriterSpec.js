/**
 * Created by charliecalvert on 1/13/15.
 */

var fileWriters = require('../Source/FileWriters.js');

describe("File Writer Tests shows that FileWriters.js exports two methods", function () {
    'use strict';

    var methods;

    beforeEach(function () {
        methods = [];
        for (var func in fileWriters) {
            if (typeof fileWriters[func] === 'function') {
                methods.push(func);
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

    it('proves that ParseCvs contains a method called writeHtml', function() {
        expect(methods.indexOf('writeHtml')).not.toBe(-1);
    });

    it('proves that ParseCvs contains a method called writeJson', function() {
        expect(methods.indexOf('writeJson')).not.toBe(-1);
    });
});