/*
class Polygon {
  constructor(arr) {
    this.arr = arr;
    this.perimeter = function () {
      let sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        sum = sum + this.arr[i];
      }
      return sum;
    }
  }

}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20 ,30 ,40, 43]);


// console.log(rectangle);
// console.log(rectangle.perimeter());


console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
*/

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function() {
  if((this.w !== undefined) && (this.h !== undefined)) {
    return this.w * this.h;
  } else {
    return this.w * this.w;
  }
};

class Square extends Rectangle {
  constructor(w) {
    super(w);
  }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log(rec.area());
console.log(sqr.area());