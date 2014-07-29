var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line){
	if (line != "") {
        line = line.replace(/(\r\n|\n|\r)/gm,"");
		console.log(line.toLowerCase());
    }
});