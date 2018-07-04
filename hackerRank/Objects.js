let actor = {
  Name: 'Juliar Robers',
  Age: 36
};

console.log('The \'actor\' object:', actor);

console.log(`The Name property: ${actor['Name']}`);
console.log(`The Age property: ${actor['Age']}`);

console.log(`${actor.Name}`);
console.log(`${actor.Age}`);

actor.EyeColor = 'Brown';
console.log(actor);

console.log(`${actor.HairColor}`);


let a = 3;
let b = 'Rome';
let c = false;

var o = {a, b, c};

console.log(`Object: 'o':`, o);

const p = {
  a: 3,
  b: 'Rome',
  c: false
};

console.log(`Object p: `, p);

let q = {};
console.log(`${q}`, q);
q.a = a;
q.b = b;
q.c = c;
console.log(q);


let o = new Object();
o.a = 4;
o.b = 'Rome';
o.c = true;

console.log(o);


const x = {
  a: 5,
  foo: function() {
    return this.a * this.a;
  }
};

let o = Object.create(x);

console.log(x);
console.log(o);
console.log(o.a);
console.log(o.foo());

o.a = 7;

console.log(o.a);
console.log(o.foo());

function Actor(firstName, lastName, Age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.Age = Age;
}

const a1 = new Actor('Julia', 'Roberta', 48);
const a2 = new Actor('Kate', 'Winslet', 40);
console.log(a1);
console.log(a2);