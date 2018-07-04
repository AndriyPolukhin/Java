// Functional Classes

// Using Functions
// 1. Define a normal JS Function
// 2. Create an Object by using the new keyword
// 3. Define properties and methods for a creted object using the this keyword

/*  // I. with just internal assignment
'use strict';

// 1. define
function Fruit (type) {
  // assign
  this.type = type;
  this.color = 'unknown';
  this.getInformation = function() {
    return `This ${this.type} is ${this.color}.`;
  }
}



// create
let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());
*/

/* // II.  with a prototype

'use strict';
function Fruit (type) {
  this.type = type;
  this.color = 'unknown';

}

Fruit.prototype.getInformation = function() {
  return `This ${this.type} is ${this.color}.`;
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());
*/

/* // 3. Using Object Literals

'use strict';
let lime = {
  type: 'Mexican lime',
  color: 'green',
  getInformation: function() {
    return `This ${this.type} is ${this.color}.`;
  }
}

console.log(lime.getInformation());
lime.color = 'yellow';
console.log(lime.getInformation());
*/

/*
// 4. Singleton Class Using a Function

'use strict';

let lime = new function() {
  this.type = 'Mexican lime';
  this.color = 'green';
  this.getInformation = function() {
    return `This ${this.type} is ${this.color}.`;
  };
}

console.log(lime.getInformation());
lime.color = 'yellow';
console.log(lime.getInformation());

*/

/*// I. CLASS DECLARATION
try {
  let p = new Polygon(1, 2);
  console.log('Polygon p:', p);
}
catch (exception) {
  console.log(exception.name + ': ' + exception.message);
}

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

p = new Polygon(1, 2);
console.log('Polygon p:', p);
*/
// II. CLASS EXPRESSIONS
/*
// 1. Unnamed Class Expressions
let Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log('Polygon:', Polygon);
let p = new Polygon(1, 2);
console.log('p:', p);

// 2. Names Class Expressoin
let Polygon2 = class Polygon2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log('Polygon2:', Polygon2);
let c = new Polygon2(1, 2);
console.log('c:', c);
*/
/*
// III. CONSTRUCTOR METHOD


// 1. Prototype Methods
'use strict';

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);
console.log(square.getArea());


// 2. Static Methods

'use strict';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

try {
  console.log(p1.distance(p1, p2));
}
catch (e) {
  console.log(e.name + ': ' + e.message);
}

*/

// IV. INHERITANCE


// 1. Extend classes
/*
'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name, 'speaks');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name, 'barks');
  }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();
*/
// 2. Extend function classes
/*
'use strict';
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function(){
  console.log(this.name, 'speaks.');
}

class Dog extends Animal {
  speak() {
    console.log(this.name, 'barks.');
  }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();
*/

// 3. SuperClass Suing the super keywords
/*
'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name, 'speaks.');
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name, 'barks.');
  }
}

let spot = new Dog('Spot');
spot.speak();

*/

'use strict';

class Animal {
  constructor(name) {
    this.animalType = 'Animal';
    this.name = name;

  }
  type() {
    console.log(this.name, 'is type', this.animalType);
  }
  speak() {
    console.log(this.name, 'speaks.');
  }
}


class Dog extends Animal {
  constructor(name, collarColor) {
    super(name);
    this.animalType = 'Dog';
    this.collarColor = collarColor;
  }
  speak() {
    console.log(this.name, 'barks.');
  }
  collar() {
    console.log(this.name, 'has a', this.collarColor);
  }
}

let spot  = new Dog('Spot', 'red');
spot.type();
spot.speak();
spot.collar();

spot = new Animal('Spot', 'white');
spot.type();
spot.speak();
try {
  spot.collar();
}
catch (e) {
  console.log(e.name +': ' + e.message
+ ' (collar is a method of Dog, not Animal');
}