'use strict';

function Triangle(sideA, sideB, sideC){
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
  if ((this.sideA || this.sideB || this.sideC) == 0) {
    throw new TriangleError();
  }
  else if (this.sideA < 0 || this.sideB < 0 || this.sideC < 0) {
    throw new TriangleError();
  }
  else if (this.sideA + this.sideB <= this.sideC || this.sideB + this.sideC <= this.sideA || this.sideC + this.sideA <= this.sideB) {
    throw new TriangleError();
  }
    if (this.sideA == this.sideB && this.sideB == this.sideC && this.sideA == this.sideC) {
    this.type = 'equilateral';
  }
  else if (this.sideA == this.sideB || this.sideB == this.sideC || this.sideA == this.sideC) {
    this.type = 'isosceles';
  }
  else if (this.sideA != this.sideB && this.sideB != this.sideC && this.sideA != this.sideC) {
    this.type = 'scalene';
  }
};

function TriangleError(){
  // debugger
};

Triangle.prototype.kind = function() {
  return this.type
};