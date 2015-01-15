describe('Require Js Test Suites', function() {
	'use strict';
	var myFunction;	
	
	beforeEach(function(done) {
		// This saves the modules for use in tests. You have to use
		// the done callback because this is asynchronous.
		requirejs(['MyFunction'], function(mo) {
			myFunction = mo;		
			done();
		});		
	});


    describe("Function Basics with Require", function() {
    	
    	it("proves true is true", function() {
        	expect(true).toBe(true);
        });
    	
        it("proves myFunction is a function", function() {
        	expect(typeof myFunction).toBe('function');
        });
        
        it("shows myFunction has three methods", function() {
        	var methods = [];
        	for (var n in myFunction) {
        		if (typeof myFunction[n] === 'function') {
        			methods.push(n);
        		}
        	}
        	expect(methods.length).toBe(3);
        });
        
        it("shows myFunction has two numeric properties", function() {
        	var methods = [];
        	for (var n in myFunction) {
        		if (typeof myFunction[n] === 'number') {
        			methods.push(n);
        		}
        	}
        	expect(methods.length).toBe(2);
        });
        
        it("shows myFunction has one string property", function() {
        	var strings = [];
        	for (var n in myFunction) {
        		if (typeof myFunction[n] === 'string') {
        			strings.push(n);
        		}
        	}
        	expect(strings.length).toBe(1);
        });        
    });
});
