// iterating over array elemetns
const arr = ['a','b','c','d'];

for (let i = 0; i < arr.length; i++) {
  console.log('arr[' + i + ']:' + arr[i]);
}


// Iterating over object properties
const o = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

console.log('property: value');
for (p in o) {
  console.log(p + ': ' + o[p]);
}

// Iterating over Arr ele.
const g = ['first', 'second', false];
for (let p in g) {
  console.log(p + ' ' + g[p]);
}

// forEach method

const array = ['a', 'b', 'c', 'd'];
array.forEach((value, index, array) => {
  console.log('index', index, 'has a value of', value, 'which correlates to array[' + index +']:', array[index]);
});

array.forEach((value, index) => {
  console.log('index', index, 'has a value of', value);
});

array.forEach(value => console.log(`value: ${value}`));