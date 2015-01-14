var csv = require("./ParseCsv");
var createHtml= require("./CreateHtml");
var createTests = require("./CreateTests");
var fileIndex = 0;
var coreName = "IsitMeetings";
var fileNames = ["Data/" + coreName + ".csv", coreName + ".tsv"];
var fileTypes = ["csv", "tsv"];

var json = csv.convertToJson(fileNames[fileIndex], fileTypes[fileIndex]);
csv.writeJson("Output/" + coreName + ".json", json);
var html = createHtml.getHtml(json, ['day', 'meeting_name', 'city']);
csv.writeHtml("Output/" + coreName + ".html", html);
createTests.getTest(json);
createTests.getKeyTests(json);
