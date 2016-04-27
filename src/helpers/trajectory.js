
var currentDepth = 0,
	currentInclination = 0,
	currentAzimuth = 0,
	currentPoint = [0, 0, 0];

function toPoints3D(points) {
	currentDepth = 0;
	currentInclination = 0;
	currentAzimuth = 0;
	currentPoint = [0, 0, 0];
	return points.map(moveNextPoint)
					.map(transform)
}


function transform(point) {
	return [-point[0], -point[2], -point[1]]
}



function moveNextPoint(position) {
	// console.log(position.join())
	// return
	var depth = position[0],
		inclination = toRadians(position[1]),
		azimuth = toRadians(position[2]),


		deltaDepth = depth - currentDepth,
		deltaVector = getDeltaVector(Math.abs(deltaDepth), currentInclination, currentAzimuth, inclination, azimuth, deltaDepth > 0? 1:-1);

		currentPoint =  addVector(currentPoint, deltaVector)
		currentInclination = inclination
		currentDepth = depth
		currentAzimuth = azimuth

		// console.log(currentPoint)
		return currentPoint;
}

function getDeltaVector(depth, currentInclination, currentAzimuth, inclination, azimuth, mult) {
	if (Math.abs(currentInclination - inclination) < 0.0001) {
		return createVector(currentInclination, currentAzimuth, depth);
	}

	// console.log(inclination)
 	// find a dog leg or beta angle (angle between old vector and new vector)
    // dogleg must be in radians
	var dogleg = Math.acos(Math.cos(inclination - currentInclination) - 
			Math.sin(currentInclination) * Math.sin(inclination) * (1 - Math.cos(azimuth - currentAzimuth)));

	// console.log("Dogleg: " + dogleg)

	//calculate ratio factor
	var ratioFactor = 1 / dogleg * Math.tan(dogleg / 2),

		//get a North changing (x-axis)
		deltaNorth = ratioFactor * depth * (Math.sin(currentInclination) * Math.cos(currentAzimuth) + 
								Math.sin(inclination) * Math.cos(azimuth)),

		//get a TVD changing (z-axis)
		deltaTVD = ratioFactor * depth * (Math.cos(currentInclination) + Math.cos(inclination)),

		//get a East changing (y-axis)
		deltaEast = ratioFactor * depth * (Math.sin(currentInclination) * Math.sin(currentAzimuth) + Math.sin(inclination) * Math.sin(azimuth));

	// return [-deltaTVD, deltaEast, deltaNorth]
	// return [-deltaTVD, deltaNorth, deltaEast]

	// return [deltaEast, -deltaTVD, deltaNorth] //почти
	// return [deltaEast, deltaNorth, -deltaTVD] //похоже

	// return [deltaNorth, deltaEast, -deltaTVD]
	// return [deltaNorth, -deltaTVD, deltaEast]

	console.log('mult = ' + mult)
	return [deltaEast * mult, deltaNorth * mult, -deltaTVD * mult]
	return [deltaEast * mult, deltaNorth * mult, deltaTVD * mult]
}


function createVector(inclination, azimuth, length) {
	var z = -length * Math.cos(inclination),
		xyProjection = Math.abs(length * Math.sin(inclination)),
		y = xyProjection * Math.cos(azimuth),
		x = xyProjection * Math.sin(azimuth);

	return [x, y, z]
}

function toRadians(degrees) {
	return degrees * Math.PI / 180
}

function addVector(a, b) {
	return a.map((_, index) => a[index] + b[index]);
}
module.exports = toPoints3D;
