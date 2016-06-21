'use strict';

function Triangle(side1,side2,side3){
  this.sides = [side1, side2, side3];
  // add your solution here!
  this.sides.forEach(function(m){
	  if (m <= 0){
       throw new TriangleError();
	  }
  });
var sorted = this.sides.sort(function(a,b){return a - b;});
  if(sorted[2] >= sorted[1] + sorted[0]){
      throw new TriangleError();
  }

};

Triangle.prototype.kind = function() {
  var counter = 0;
  var value;
  var sorted = this.sides.sort(function(a,b){return a - b;});
    sorted.forEach(function(m){
      if(m === value){
	    ++counter;
		value = m;
	  }else{
		value = m;
	  }
	  if(!value){
        value = m;
	  }
	
    });
	switch(counter){
		case 0:
		return 'scalene'; 
	     break;
	    case 1:
	    return 'isosceles';
	    break;
	    case 2:
	    return 'equilateral';
	    break;
	};
};


function TriangleError(message){
	this.name = "TriangleError";
    this.message = (message || "You cant make a triangle that way");
}

TriangleError.prototype = new Error();










