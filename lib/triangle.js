'use strict';

function Triangle(one,two,three){
  // add your solution here!
  if (!(one > 0)||!(two > 0)||!(three > 0)||!((one+two)>three&&(two+three)>one&&(three+one)>two)) {
  	throw new TriangleError()
  }
  this.one = one
  this.two = two
  this.three = three
};

Triangle.prototype.kind = function() {
	// body...
	if (this.one == this.two && this.two == this.three) {
		return 'equilateral'
	} else if (this.one == this.two || this.one == this.three || this.two == this.three) {
		return 'isosceles'
	} else {
		return 'scalene'
	}
};

function TriangleError(message) {
}