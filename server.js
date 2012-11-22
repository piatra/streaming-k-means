var http = require('http');
var read = require('fs').createReadStream;

http.createServer(function(req, res){

	read('cluster_1.points').pipe(res);

});