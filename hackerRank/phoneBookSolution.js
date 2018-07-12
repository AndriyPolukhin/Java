// CASE I:

// function processData(input) {

// const inArr = input.split('\n');
// let length = Number(inArr[0]);
// inArr.shift();
// let people = {};
// while (length > 0) {
//   let temp = inArr[0].split(' ');
//   people[temp[0]] = temp[1];
//   length--;
//   inArr.shift();
// }
// let match = false;

// while (inArr.length > 0) {
//   if (inArr[0] === '') {
//     inArr.shift();
//     continue;
//   }
//   for (key in people) {
//     if (inArr[0] === key) {
//       match = true;
//       console.log(`${key  }=${  people[key]}`);
//     }
//   }
//   if (match === false) {
//     console.log('Not found');
//   }
//   match = false;
//   inArr.shift();
// }
// }

// CASE II:
function processData(input) {
  var temp = input.split('\n');
  var n = temp.shift();
  var arr = [];
  var book = {};
  for (i = 0; i < n; i++) {
    arr[0] = (temp.shift().split(' '));
    book[arr[0][0]] = arr[0][1];
  }
  for (a = 0; a < temp.length; a++) {
    if (book.hasOwnProperty(temp[a])) {
      console.log(temp[a] + '=' + book[temp[a]]);
    } else {
      console.log('Not found');
    }
  }
}


// CASE III:
function processData(input) {
  input = input.split('\n')
  var N = parseInt(input[0])

  var phonebook = []
  for (var k = 0; k < N; k++) {
    var line = input[k + 1]
    line = line.split(' ')
    phonebook[line[0]] = line[1]
  }

  for (var k = N + 1; k < input.length; k++) {
    var num = (phonebook[input[k]])
    if (num !== undefined) {
      console.log(input[k] + '=' + num)
    } else {
      console.log('Not found')
    }
  }





  processData([
    '3',
    'sam 99912222',
    'tom 11122222',
    'harry 12299933',
    'sam',
    'edward',
    'harry'
  ]);