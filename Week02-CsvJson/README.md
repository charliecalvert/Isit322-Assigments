# CsvJson

This project has two goals:

- Process **Data/IsitMeetings.csv**, transform it into json and place its contents in **Output/IsitMeetings.json**.
- Process **Output/IsitMeetings.json** into HTML and place its contents in **Output/Isitmeetings.html**.

A series of tests are available in the Test Folder. There are designed to be a guide to help you create the core of
the program which consists of a series of files found in the Source.js folder.

## Resources

Students are given the following files in their entirety:

- Data/IsitMeetings.csv
- Test/FileWriterSpec.js
- Test/JsonSpec.js
- Test/ParseCsvSpec.js
- Test/SplitSpec.js
- Source/Control.js
- Source/CreateTests.js

The following files are either missing or incomplete:

- Source/CreateHtml.js
- Source/FileWriters.js
- Source/ParseCsv.js

The following block of code, which belongs in **ParseCsv.js** is also given to you:

```JavaScript
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
	// Code omitted here
}

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
	 * and ending white space, and converted into an array using the String,split function. The split
	 * function divides the string on line feed characters ('\n').
	 * @param fileName
	 * @returns {string}
	 */
	this.readFile = function(fileName) {
		// code omitted here
		return fileData;
	}


	/**
	 * defineTokens: The first line of the CSV file contains the column names. Access this data and convert it
	 * into an array with the **String.split** function, using **splitChar** as the parameter. If you can,
	 * use the array.map function to trim each member of the array. Place the results in the object global
	 * variable headerTokens.
	 * @returns {Array} The headerTokens array
	 */
	this.defineHeaderTokens = function() {
	   // Code omitted here
	   return headerTokens;
	}

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

}

```

## The Goal

Use the tests as a guide to help you:

- Complete or create the missing code.
- Ensure all the tests pass

## Things you need to know

Run the tests:

	./RunJasmineNode
	
The only method you need to call to convert the CSV to JSON is **ConvertToJson.run**. The other methods are made
public so you can call them in your tests. We will consider ways to hide these methods later in the course. But
I don't really need to tell you this, because the tests should explain exactly what each method does.

This is a:

- tab character: '\t'
- comma: ','
- double quotes: '"'

You can convert this string into an array with the split function '1,2,3':

- '1,2,3'.split(',')
- Result: ['1', '2', '3']

The node file system package ([fs](http://nodejs.org/api/fs.html)) package has routines for reading and writing files:

- [readFileSync](http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options)
- [writeFile](http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback)
- [SplitSlice][splitslice]
- [Split][split]

[splitslice]: https://github.com/charliecalvert/Prog272-Assignments/blob/master/Week02-SplitSlice/README.md

