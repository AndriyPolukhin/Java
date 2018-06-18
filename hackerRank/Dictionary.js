function processData(input) {

  // const N = arguments.length - 1;
  // const string = input[N].split('\n');


  // const string = input[N].split('\n');
  const string = input;
  const n = parseInt(string[0]);
  const map = string.slice(1, n + 1);
  const myMap = new Map();
  const query = Array.from(string.slice(string.length - map.length));

  for (const item of map) {
    const i = item.split(' ');
    myMap.set(i[0], i[1]);
  }

  for (let i = 0; i < query.length; i++) {
    if (myMap.has(query[i])) {
      const value = myMap.get(query[i]);
      console.log(`${query[i]  } = ${  value}`);
    } else {
      console.log('Not Found');
    }
  }
}


processData(
  ['3', 'sam 99912222', 'tom 11122222', 'harry 12299933', 'sam', 'edward', 'harry']
);

/*
['3\nsam',
  '99912222\ntom',
  '11122222\nharry',
  '12299933\nsam\nedward\nharry'
]

['3', 'sam 99912222', 'tom 11122222', 'harry 12299933', 'sam', 'edward', 'harry']

3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
*/