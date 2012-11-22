var fs = require('fs');
var kmeans = require('./');

var stream = fs.createReadStream('output.txt');
var array = "";
stream.on('data', function(data){
	array+=data;
});
stream.on('end', function(){
	array = JSON.parse(array);
	
	var clusters = kmeans.means(array, 2);
	console.log(clusters);
});
stream.on('error', function(err){
	console.log(err);
});