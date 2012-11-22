var fs = require('fs');

if(process.argv.length < 4)
	console.log('Usage: node program.js [number of elements] [output.txt]');
else {
	var l = process.argv[2];
	var stream = fs.createWriteStream(process.argv[3]);
	stream.write(l + '\n');
	for(var i = 0; i < l; i++) {
		stream.write(parseInt(Math.random()*1000%500) + '\n');
	}
}