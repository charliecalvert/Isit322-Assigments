/**
 * Created by charliecalvert on 1/13/15.
 */

var chai = require('chai');
var expect = chai.expect;

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
        expect(true).to.equal(true);
    });

    it("proves that ParseCsv.js exports two methods", function() {
        expect(methods.length).to.equal(2);
    });

    it('proves that ParseCvs contains a method called writeHtml', function() {
        expect(methods.indexOf('writeHtml')).not.to.equal(-1);
    });

    it('proves that ParseCvs contains a method called writeJson', function() {
        expect(methods.indexOf('writeJson')).not.to.equal(-1);
    });
});