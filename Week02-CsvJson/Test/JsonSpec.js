var chai = require('chai');
var expect = chai.expect;

var parseCsv = require('../Source/ParseCsv.js');

describe("Json Tests", function () {
    'use strict';

    var json;

    beforeEach(function() {
        var convertToJson = new parseCsv.ConvertToJson();
        json = convertToJson.run('Data/IsitMeetings.csv', 'csv');
    });

    it("proves that true is true", function () {
        expect(true).to.equal(true);
    });

    it("proves we have ten records in the json object", function() {
        expect(json.length).to.equal(10);
    });

    it("proves json first record contains Sunday", function() {
        expect(json[0].day).to.equal('Sunday');
    });

    it("proves json second record contains Sunday", function() {
        expect(json[1].day).to.equal('Sunday');
    });

    it("proves json third record contains Monday", function() {
        expect(json[2].day).to.equal('Monday');
    });

    it("proves json fourth record contains Tuesday", function() {
        expect(json[3].day).to.equal('Tuesday');
    });

    it("proves json fifth record contains Wednesday", function() {
        expect(json[4].day).to.equal('Wednesday');
    });

    it("proves json sixth record contains Thursday", function() {
        expect(json[5].day).to.equal('Thursday');
    });

    it("proves json seventh record contains Thursday", function() {
        expect(json[6].day).to.equal('Thursday');
    });

    it("proves json eighth record contains Friday", function() {
        expect(json[7].day).to.equal('Friday');
    });

    it("proves json nineth record contains Friday", function() {
        expect(json[8].day).to.equal('Friday');
    });

    it("proves json tenth record contains Saturday", function() {
        expect(json[9].day).to.equal('Saturday');
    });

    it("proves keys for record 1 are correct", function() {
        var keys = Object.keys(json[0]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 2 are correct", function() {
        var keys = Object.keys(json[1]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 3 are correct", function() {
        var keys = Object.keys(json[2]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 4 are correct", function() {
        var keys = Object.keys(json[3]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 5 are correct", function() {
        var keys = Object.keys(json[4]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 6 are correct", function() {
        var keys = Object.keys(json[5]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 7 are correct", function() {
        var keys = Object.keys(json[6]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 8 are correct", function() {
        var keys = Object.keys(json[7]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 9 are correct", function() {
        var keys = Object.keys(json[8]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves keys for record 10 are correct", function() {
        var keys = Object.keys(json[9]);
        expect(keys[0]).to.equal("meeting_id");
        expect(keys[1]).to.equal("day");
        expect(keys[2]).to.equal("time");
        expect(keys[3]).to.equal("town");
        expect(keys[4]).to.equal("meeting_name");
        expect(keys[5]).to.equal("location");
        expect(keys[6]).to.equal("street_address");
        expect(keys[7]).to.equal("city");
        expect(keys[8]).to.equal("state");
        expect(keys[9]).to.equal("zip");
        expect(keys[10]).to.equal("subjects");
    });

    it("proves json first record contains correct data", function() {
        expect(json[0].meeting_id).to.equal('1');
        expect(json[0].day).to.equal('Sunday');
        expect(json[0].time).to.equal('06:00:00');
        expect(json[0].town).to.equal('Bellevue');
        expect(json[0].meeting_name).to.equal('Function Kings');
        expect(json[0].location).to.equal('City Hall');
        expect(json[0].street_address).to.equal('12 NE 83 St');
        expect(json[0].city).to.equal('Bellevue');
        expect(json[0].state).to.equal('WA');
        expect(json[0].zip).to.equal('98005');
        expect(json[0].subjects).to.equal('F#');
    });

    it("proves json second record contains correct data", function() {
        expect(json[1].meeting_id).to.equal("2");
        expect(json[1].day).to.equal("Sunday");
        expect(json[1].time).to.equal("07:00:00");
        expect(json[1].town).to.equal("Seattle");
        expect(json[1].meeting_name).to.equal("Wayward Commas");
        expect(json[1].location).to.equal("Rage Against the Machine");
        expect(json[1].street_address).to.equal("15 NE 58 St");
        expect(json[1].city).to.equal("Seattle");
        expect(json[1].state).to.equal("WA");
        expect(json[1].zip).to.equal("98005");
        expect(json[1].subjects).to.equal("HTML; CSS; JavaScript");
    });

    it("proves json record 3 contains correct data", function() {
        expect(json[2].meeting_id).to.equal("3");
        expect(json[2].day).to.equal("Monday");
        expect(json[2].time).to.equal("07:00:00");
        expect(json[2].town).to.equal("Bellevue");
        expect(json[2].meeting_name).to.equal("Syntax Ships");
        expect(json[2].location).to.equal("Jump Building");
        expect(json[2].street_address).to.equal("11 168 Ave NE");
        expect(json[2].city).to.equal("Bellevue");
        expect(json[2].state).to.equal("WA");
        expect(json[2].zip).to.equal("98007");
        expect(json[2].subjects).to.equal("CSS");
    });

    it("proves json record 5 contains correct data", function() {
        expect(json[4].meeting_id).to.equal("5");
        expect(json[4].day).to.equal("Wednesday");
        expect(json[4].time).to.equal("08:30:00");
        expect(json[4].town).to.equal("Redmond");
        expect(json[4].meeting_name).to.equal("Freedom Coders");
        expect(json[4].location).to.equal("Empire Way");
        expect(json[4].street_address).to.equal("330 18 Ave SE");
        expect(json[4].city).to.equal("Redmond");
        expect(json[4].state).to.equal("WA");
        expect(json[4].zip).to.equal("98052");
        expect(json[4].subjects).to.equal("C#");
    });

    it("proves json record 6 contains correct data", function() {
        expect(json[5].meeting_id).to.equal("6");
        expect(json[5].day).to.equal("Thursday");
        expect(json[5].time).to.equal("09:30:00");
        expect(json[5].town).to.equal("Bellevue");
        expect(json[5].meeting_name).to.equal("Hacker Paradise");
        expect(json[5].location).to.equal("Lonnies Bar and Grill");
        expect(json[5].street_address).to.equal("122 SE 92 St");
        expect(json[5].city).to.equal("Bellevue");
        expect(json[5].state).to.equal("WA");
        expect(json[5].zip).to.equal("98005");
        expect(json[5].subjects).to.equal("HTML; CSS; JavaScript");
    });

    it("proves json record 7 contains correct data", function() {
        expect(json[6].meeting_id).to.equal("7");
        expect(json[6].day).to.equal("Thursday");
        expect(json[6].time).to.equal("12:30:00");
        expect(json[6].town).to.equal("Bellevue");
        expect(json[6].meeting_name).to.equal("Web Kings");
        expect(json[6].location).to.equal("East Hall");
        expect(json[6].street_address).to.equal("12 NE 60 St");
        expect(json[6].city).to.equal("Bellevue");
        expect(json[6].state).to.equal("WA");
        expect(json[6].zip).to.equal("98005");
        expect(json[6].subjects).to.equal("JavaScript");
    });

    it("proves json record 8 contains correct data", function() {
        expect(json[7].meeting_id).to.equal("8");
        expect(json[7].day).to.equal("Friday");
        expect(json[7].time).to.equal("13:30:00");
        expect(json[7].town).to.equal("Monroe");
        expect(json[7].meeting_name).to.equal("Night Hackers");
        expect(json[7].location).to.equal("Winter Clubhouse");
        expect(json[7].street_address).to.equal("16 NE 171 St");
        expect(json[7].city).to.equal("Monroe");
        expect(json[7].state).to.equal("WA");
        expect(json[7].zip).to.equal("98005");
        expect(json[7].subjects).to.equal("HTML; CSS");
    });

    it("proves json record 9 contains correct data", function() {
        expect(json[8].meeting_id).to.equal("9");
        expect(json[8].day).to.equal("Friday");
        expect(json[8].time).to.equal("14:00:00");
        expect(json[8].town).to.equal("Kirkland");
        expect(json[8].meeting_name).to.equal("Infinite Loop");
        expect(json[8].location).to.equal("Tall Building");
        expect(json[8].street_address).to.equal("38 NE 93 St");
        expect(json[8].city).to.equal("Kirkland");
        expect(json[8].state).to.equal("WA");
        expect(json[8].zip).to.equal("98005");
        expect(json[8].subjects).to.equal("JavaScript");
    });

    it("proves json record 10 contains correct data", function() {
        expect(json[9].meeting_id).to.equal("10");
        expect(json[9].day).to.equal("Saturday");
        expect(json[9].time).to.equal("17:30:00");
        expect(json[9].town).to.equal("Issaquah");
        expect(json[9].meeting_name).to.equal("Callbacks");
        expect(json[9].location).to.equal("Real Estates");
        expect(json[9].street_address).to.equal("12302 NE 27 St");
        expect(json[9].city).to.equal("Issaquah");
        expect(json[9].state).to.equal("WA");
        expect(json[9].zip).to.equal("98005");
        expect(json[9].subjects).to.equal("Java; C#");
    });


});