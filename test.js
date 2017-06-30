var circlePoint = require('./index.js');

// Radians to move around the center point
var radians = Math.PI/4;

// Center point in x, y
var center = {x: 200, y: 200};

// Point to calculate next point from
var point = {x: 300, y: 200};

var nextPoint = circlePoint(point, center, radians);

console.log(nextPoint);