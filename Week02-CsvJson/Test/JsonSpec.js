var parseCsv = require('../Source/ParseCsv.js');

describe("Json Tests", function () {
    'use strict';

    var json;

    beforeEach(function() {
        var convertToJson = new parseCsv.ConvertToJson();
        json = convertToJson.run('Data/IsitMeetings.csv', 'csv');
    });

    it("proves that true is true", function () {
        expect(true).toBe(true);
    });

    it("proves we have ten records in the json object", function() {
        expect(json.length).toBe(10);
    });

    it("proves json first record contains Sunday", function() {
        expect(json[0].day).toBe('Sunday');
    });

    it("proves json second record contains Sunday", function() {
        expect(json[1].day).toBe('Sunday');
    });

    it("proves json third record contains Monday", function() {
        expect(json[2].day).toBe('Monday');
    });

    it("proves json fourth record contains Tuesday", function() {
        expect(json[3].day).toBe('Tuesday');
    });

    it("proves json fifth record contains Wednesday", function() {
        expect(json[4].day).toBe('Wednesday');
    });

    it("proves json sixth record contains Thursday", function() {
        expect(json[5].day).toBe('Thursday');
    });

    it("proves json seventh record contains Thursday", function() {
        expect(json[6].day).toBe('Thursday');
    });

    it("proves json eighth record contains Friday", function() {
        expect(json[7].day).toBe('Friday');
    });

    it("proves json nineth record contains Friday", function() {
        expect(json[8].day).toBe('Friday');
    });

    it("proves json tenth record contains Saturday", function() {
        expect(json[9].day).toBe('Saturday');
    });

    it("proves keys for record 1 are correct", function() {
        var keys = Object.keys(json[0]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 2 are correct", function() {
        var keys = Object.keys(json[1]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 3 are correct", function() {
        var keys = Object.keys(json[2]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 4 are correct", function() {
        var keys = Object.keys(json[3]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 5 are correct", function() {
        var keys = Object.keys(json[4]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 6 are correct", function() {
        var keys = Object.keys(json[5]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 7 are correct", function() {
        var keys = Object.keys(json[6]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 8 are correct", function() {
        var keys = Object.keys(json[7]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 9 are correct", function() {
        var keys = Object.keys(json[8]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves keys for record 10 are correct", function() {
        var keys = Object.keys(json[9]);
        expect(keys[0]).toBe("meeting_id");
        expect(keys[1]).toBe("day");
        expect(keys[2]).toBe("time");
        expect(keys[3]).toBe("town");
        expect(keys[4]).toBe("meeting_name");
        expect(keys[5]).toBe("location");
        expect(keys[6]).toBe("street_address");
        expect(keys[7]).toBe("city");
        expect(keys[8]).toBe("state");
        expect(keys[9]).toBe("zip");
        expect(keys[10]).toBe("subjects");
    });

    it("proves json first record contains correct data", function() {
        expect(json[0].meeting_id).toBe('1');
        expect(json[0].day).toBe('Sunday');
        expect(json[0].time).toBe('06:00:00');
        expect(json[0].town).toBe('Bellevue');
        expect(json[0].meeting_name).toBe('Function Kings');
        expect(json[0].location).toBe('City Hall');
        expect(json[0].street_address).toBe('12 NE 83 St');
        expect(json[0].city).toBe('Bellevue');
        expect(json[0].state).toBe('WA');
        expect(json[0].zip).toBe('98005');
        expect(json[0].subjects).toBe('F#');
    });

    it("proves json second record contains correct data", function() {
        expect(json[1].meeting_id).toBe("2");
        expect(json[1].day).toBe("Sunday");
        expect(json[1].time).toBe("07:00:00");
        expect(json[1].town).toBe("Seattle");
        expect(json[1].meeting_name).toBe("Wayward Commas");
        expect(json[1].location).toBe("Rage Against the Machine");
        expect(json[1].street_address).toBe("15 NE 58 St");
        expect(json[1].city).toBe("Seattle");
        expect(json[1].state).toBe("WA");
        expect(json[1].zip).toBe("98005");
        expect(json[1].subjects).toBe("HTML; CSS; JavaScript");
    });

    it("proves json record 3 contains correct data", function() {
        expect(json[2].meeting_id).toBe("3");
        expect(json[2].day).toBe("Monday");
        expect(json[2].time).toBe("07:00:00");
        expect(json[2].town).toBe("Bellevue");
        expect(json[2].meeting_name).toBe("Syntax Ships");
        expect(json[2].location).toBe("Jump Building");
        expect(json[2].street_address).toBe("11 168 Ave NE");
        expect(json[2].city).toBe("Bellevue");
        expect(json[2].state).toBe("WA");
        expect(json[2].zip).toBe("98007");
        expect(json[2].subjects).toBe("CSS");
    });

    it("proves json record 5 contains correct data", function() {
        expect(json[4].meeting_id).toBe("5");
        expect(json[4].day).toBe("Wednesday");
        expect(json[4].time).toBe("08:30:00");
        expect(json[4].town).toBe("Redmond");
        expect(json[4].meeting_name).toBe("Freedom Coders");
        expect(json[4].location).toBe("Empire Way");
        expect(json[4].street_address).toBe("330 18 Ave SE");
        expect(json[4].city).toBe("Redmond");
        expect(json[4].state).toBe("WA");
        expect(json[4].zip).toBe("98052");
        expect(json[4].subjects).toBe("C#");
    });

    it("proves json record 6 contains correct data", function() {
        expect(json[5].meeting_id).toBe("6");
        expect(json[5].day).toBe("Thursday");
        expect(json[5].time).toBe("09:30:00");
        expect(json[5].town).toBe("Bellevue");
        expect(json[5].meeting_name).toBe("Hacker Paradise");
        expect(json[5].location).toBe("Lonnies Bar and Grill");
        expect(json[5].street_address).toBe("122 SE 92 St");
        expect(json[5].city).toBe("Bellevue");
        expect(json[5].state).toBe("WA");
        expect(json[5].zip).toBe("98005");
        expect(json[5].subjects).toBe("HTML; CSS; JavaScript");
    });

    it("proves json record 7 contains correct data", function() {
        expect(json[6].meeting_id).toBe("7");
        expect(json[6].day).toBe("Thursday");
        expect(json[6].time).toBe("12:30:00");
        expect(json[6].town).toBe("Bellevue");
        expect(json[6].meeting_name).toBe("Web Kings");
        expect(json[6].location).toBe("East Hall");
        expect(json[6].street_address).toBe("12 NE 60 St");
        expect(json[6].city).toBe("Bellevue");
        expect(json[6].state).toBe("WA");
        expect(json[6].zip).toBe("98005");
        expect(json[6].subjects).toBe("JavaScript");
    });

    it("proves json record 8 contains correct data", function() {
        expect(json[7].meeting_id).toBe("8");
        expect(json[7].day).toBe("Friday");
        expect(json[7].time).toBe("13:30:00");
        expect(json[7].town).toBe("Monroe");
        expect(json[7].meeting_name).toBe("Night Hackers");
        expect(json[7].location).toBe("Winter Clubhouse");
        expect(json[7].street_address).toBe("16 NE 171 St");
        expect(json[7].city).toBe("Monroe");
        expect(json[7].state).toBe("WA");
        expect(json[7].zip).toBe("98005");
        expect(json[7].subjects).toBe("HTML; CSS");
    });

    it("proves json record 9 contains correct data", function() {
        expect(json[8].meeting_id).toBe("9");
        expect(json[8].day).toBe("Friday");
        expect(json[8].time).toBe("14:00:00");
        expect(json[8].town).toBe("Kirkland");
        expect(json[8].meeting_name).toBe("Infinite Loop");
        expect(json[8].location).toBe("Tall Building");
        expect(json[8].street_address).toBe("38 NE 93 St");
        expect(json[8].city).toBe("Kirkland");
        expect(json[8].state).toBe("WA");
        expect(json[8].zip).toBe("98005");
        expect(json[8].subjects).toBe("JavaScript");
    });

    it("proves json record 10 contains correct data", function() {
        expect(json[9].meeting_id).toBe("10");
        expect(json[9].day).toBe("Saturday");
        expect(json[9].time).toBe("17:30:00");
        expect(json[9].town).toBe("Issaquah");
        expect(json[9].meeting_name).toBe("Callbacks");
        expect(json[9].location).toBe("Real Estates");
        expect(json[9].street_address).toBe("12302 NE 27 St");
        expect(json[9].city).toBe("Issaquah");
        expect(json[9].state).toBe("WA");
        expect(json[9].zip).toBe("98005");
        expect(json[9].subjects).toBe("Java; C#");
    });


});