var circlePoint = require('./index.js');

// Change above statement to
// var circlePoint = require('point-on-circle');

// num Radians to move. E.g. 1/4 of a circle
var radians = Math.PI/2;

// Center point in x, y
var center = {x: 200, y: 200};

// Point to calculate next point from. This also defines a circle
// around the center point
var point = {x: 300, y: 200};

var nextPoint = circlePoint(point, center, radians);

console.log(nextPoint);
// => { x: 200, y: 300 } 
