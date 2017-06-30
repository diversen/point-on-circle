function rotatePoint(cords, center, theta) {
	var x = Math.cos(theta) * (cords.x-center.x) - Math.sin(theta) * (cords.y-center.y) + center.x
	var y = Math.sin(theta) * (cords.x-center.x) + Math.cos(theta) * (cords.y-center.y) + center.y
	return {x: x, y: y};
}

module.exports = rotatePoint;