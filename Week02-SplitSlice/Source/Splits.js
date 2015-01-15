/**
 * Created by charliecalvert on 1/13/15.
 */

exports.splits = {

    splitOnDash: function (value) {
        'use strict';
        return value.split('-');
    },

    splitOnCommaWithSpace01: function (value) {
        'use strict';
        var split = value.split(',');
        return split.map(function (item) {
            return item.trim();
        });
    },

    splitOnCommaWithSpace02: function (value) {
        'use strict';
        return value.split(',').map(function (item) {
            return item.trim();
        });
    }
};
