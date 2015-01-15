
require.config({
	baseUrl: './',
    paths: {
        MyFunction: '../Source/MyFunction'
    }
});

require(['FunctionSpec'], function(ot) {
    'use strict';

    return {};
});
