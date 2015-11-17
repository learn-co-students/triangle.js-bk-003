'use strict';

function TriangleError () {

};
TriangleError.prototype = new Error();

function Triangle(a,b,c){

	var arr = [a,b,c]; arr.sort(); 
	a = arr[0]; b = arr[1]; c = arr[2];


	if ((a <= 0 || b <= 0 || c <=0) || (a+b<=c) ){

		throw new TriangleError();
	};

	this.a =a;
	this.b =b;
	this.c =c;
};

Triangle.prototype.kind = function() {
	if ((this.a == this.b) && (this.b == this.c)) {
		return 'equilateral';
	} else if ((this.a == this.b) || (this.b == this.c) || (this.a == this.c) ){
		return 'isosceles';
	} else if ((this.a != this.b) && (this.b != this.c) && (this.a != this.c) ){
		return 'scalene';
	};
};

