/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.replace(/(\r\n|\n|\r)/gm,"");

  	console.log(line.split(' ').reverse().join(' '));
    }
});

 /*alternate solution
//adding file module
fs = require('fs');

//getting filepath to a variable
filePath = process.argv[2];
var line;

//reading the file
fs.readFile(filePath, 'utf8', function (err,data) {
  //error in file read
  if (err) {
    return console.log(err);
  }

 
  loading each line of a file to an array
  line = data.split('\r');

  //looping the array
  for(var i=0;i<line.length;i++)
  {
  	//regex to eminate all type of line breaks
  	line[i] = line[i].replace(/(\r\n|\n|\r)/gm,"");

  	console.log(line[i].split(' ').reverse().join(' '));
  }
  	
});

*/

