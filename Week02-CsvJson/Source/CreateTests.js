/**
 * Created by charliecalvert on 1/13/15.
 */


/**
 * Write tests based on an array of objects with data in them.
 * @param json is the json on which to base the tests
 * @param index is the index into the array of objects in the json
 */

var keyTests = function(json, index) {
    'use strict';
    var keys = Object.keys(json[index]),
        recordNumber = index + 1;

    console.log('\nit("proves keys for record ' + recordNumber + ' are correct", function() {');
    console.log('\tvar keys = Object.keys(json[' + index + ']);');
    for (var i = 0; i < keys.length; i++) {
        console.log('\texpect(keys[' + i + ']' + ').toBe("' + keys[i] + '");');
    }
    console.log("});");

};

var writeTests = function(json, index) {
    'use strict';

    var keys = Object.keys(json[index]);

    var recordNumber = index + 1;
    console.log('\nit("proves json record ' + recordNumber + ' contains correct data", function() {');
    for (var i = 0; i < keys.length; i++) {
        console.log('\texpect(json[' + index + '].' + keys[i] + ').toBe("' + json[index][keys[i]] + '");');
    }
    console.log("});");
};

exports.getKeyTests = function(json) {
    'use strict';

    for (var i = 0; i < json.length; i++) {
        keyTests(json, i);
    }
};

exports.getTest = function(json) {
    'use strict';

    for (var i = 0; i < json.length; i++) {
        writeTests(json, i);
    }
};