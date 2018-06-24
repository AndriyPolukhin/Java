/*
const a = ['first', 'second'];
console.log('a\'s contents:', a);
console.log('a\'s length:', a.length);

let b = ['first', 'second'];

let first = b[0];
let last = b[b.length - 1];

console.log('b[0]:', first);
console.log('b[b.length - 1]:', last);

let c = ['first', 'second'];

c.forEach(function (e, i, array) {
  // 'i' is the index
  // 'e' is the element
  console.log(i + ' ' + e);
});

let d = ['first', 'second'];

d.push('third');
console.log('Original Array:', d);

let removed = d.pop();
console.log('Modified Array:', d);
console.log('Removed Element:', removed);

let removedFront = d.shift();
console.log('Removed Front:', removedFront);

d.unshift('fourth');
console.log('Current Array:', d);



const a = ['first', 'second', 'thrid', 'fourth'];
let position = a.indexOf('second');
console.log('a:', a);
console.log('position:', position);



const a = ['first', 'second', 'third', 'fourth', 'fifth'];
console.log('Original Array:', a);

let position = 1;
let elementsToRemove = 2;
a.splice(position, elementsToRemove);

console.log('Modified Array:', a);



const a = ['first', 'second', 'third', 'fourth', 'fifth'];
console.log('a:', a);

// Shallow copy array 'a' into a new object
let b = a.slice();

console.log('b:', b);

*/

const a = ['c', 'a', 'd', 'b', 'aa'];
const b = [9, 2, 13, 7, 1, 12, 123];

// sort in asceding order using a built-in
// a.sort();
// b.sort();

// sort in descending order using a compare function
// a.sort(function (x, y) {
//   return x < y;
// });
// b.sort(function (x, y) {
//   return x < y;
// });

a.sort((x, y) => x < y);


a.sort((x, y) => x - y);
b.sort((x, y) => x - y);


console.log('a:', a);
console.log('b:', b);

const array = ['first', 'second', 'third', 'fourth'];
for (let e of array) {
  console.log('e:', e);
}