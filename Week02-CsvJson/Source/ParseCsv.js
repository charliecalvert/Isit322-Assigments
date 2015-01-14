/*jshint loopfunc: true */

var fs = require('fs');

/**
 * If the first and last characters of a string are equal to some character, then remove them.
 * Handy if you want to remove quotation marks from a string. For instance, it convents this string:
 *
 * 	"Foo"
 *
 * Into this string:
 *
 * 	Foo
 *
 * @param value The string to test to see if it is wrapped inside of **char**.
 * @param char The character to remove. Usually this is quotation marks ("), but it could be any character.
 * @returns {string} Return the string with the quotation marks or other character sliced off.
 */
var removeFirstLastChar = function removeFirstLastChar(value, char) {
	'use strict';
	// If you have trouble finish the SplitSlice unit tests first.
};

exports.removeFirstLastChar = removeFirstLastChar;

exports.ConvertToJson = function() {

	'use strict';

	var splitChar = "\t",
		fileData = '',
		json = [],
		headerTokens = [];

	/**
	 * The files we process can be either tab separated or comma separated. A switch statement
	 * in this method sets the object global variable **splitChar** to a single character. The character
	 * will be either a comma (',') or a tab ('\t') depending on the value of **fileType**.
	 * @param fileType can be either 'csv' or 'tsv'
	 * @returns {string} The value of splitChar to use in our tests.
	 */
	this.setFileType = function(fileType) {
		// Code omitted here
		return splitChar;
	};

	/**
	 * readFile: Read a text file with fs.readFileSync. The data read from the file is stored in an object global
	 * called **fileData**. The data from the file is converted to a string, trimmed to remove beginning
	 * and ending white space, and converted into an array using the String.split function. The split
	 * function divides the string on line feed character ('\n').
	 * @param fileName
	 * @returns {string}
	 */
	this.readFile = function(fileName) {
		// Dot them together to do it in one line....
		return fileData;
	};


	/**
	 * defineTokens: The first line of the CSV file contains the column names. Access this data and convert it
	 * into an array with the **String.split** function, using **splitChar** as the parameter. If you can,
	 * use the array.map function to trim each member of the array. Place the results in the object global
	 * variable headerTokens.
	 * @returns {Array} The headerTokens array
	 */
	this.defineHeaderTokens = function() {
		// I did this in two lines
		return headerTokens;
	};

	this.convert = function() {
		for(var i=1;i < fileData.length;i++) {
			if (fileData[i].trim().length > 0) {
				var content = fileData[i].split(splitChar);
				content = content.map(function(word) {
					return removeFirstLastChar(word, '"');
				});

				var tmp = {};
				for(var j=0; j < headerTokens.length; j++) {
					try {
						tmp[headerTokens[j]] = content[j];
					} catch(err) {
						tmp[headerTokens[j]] = "";
					}
				}
				json.push(tmp);
			}
		}

		return json;
	};

	this.run = function(fileName, fileType) {
		this.setFileType(fileType);
		this.readFile(fileName);
		this.defineHeaderTokens();
		return this.convert();
	};

};


