var norm = function(a, b) {
	var dx = b.x - a.x;
	var dy = b.y - a.y;
	return Math.sqrt(dx*dx + dy*dy);
};


var clusteringpc = function(points, nc) {

	var npoints = points.length;
	var centroids = [];
	var newcentroids = [];
	var distribution = [];
	var j;
	for(var i = 0; i<nc; ++i) {
		centroids[i] = {x:0, y:0};
	}

	for(i=0;i<nc;++i) {
		centroids[i] = points[i];
	}

	var ok = 1;

	for(i=0;i<npoints;++i) {
		distribution[i] = 0;
	}

	while(ok) {
		for( j=0 ; j < npoints ; ++j) { // pt fiecare punct
			bestDistance = 1000;
			for(i=0; i < nc; ++i) {
				
				cost = norm(points[j], centroids[i]);
				if(cost < 0.0000001)
					cost = 0;
				
				if(cost < bestDistance) {
					bestDistance = cost;
					distribution[j] = i;
				}
			}
		}

		for(i=0;i<nc;++i) {
			mean = {x:0,y:0};
			var count = 0;
			for(j=0;j<npoints;++j) {
				if(distribution[j] === i) {
					mean.x += points[j].x;
					mean.y += points[j].y;
					count++;
				}

			}
			
			mean.x /= count;
			mean.y /= count;
			if(count) newcentroids[i] = mean;
			else newcentroids[i] = centroids[i];

		}

		ok = 0;
		for(i = 0; i<nc; ++i) {
			if(newcentroids[i].x != centroids[i].x || newcentroids[i].y != centroids[i].y)
				ok = 1;
		}
		if(ok)
			centroids = newcentroids;

	}

	return newcentroids;

};

module.exports.means = clusteringpc;