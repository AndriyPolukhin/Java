function processData(input) {

  const phoneBook = {};
  const n = parseInt(input[0]);
  const pairs = input.slice(1, n + 1);
  const query = input.slice(input.length - pairs.length);

  for (const pair of pairs) {
    const i = pair.split(' ');
    phoneBook[i[0]] = i[1];
  }

  for (let i = 0; i < n; i++) {
    if (phoneBook[query[i]]) {
      console.log(`${Object.keys(phoneBook)[i]}=${phoneBook[query[i]]}`);
    } else {
      console.log(`Not found`);
    }
  }
}

processData([
  "3",
  "sam 99912222",
  "tom 11122222",
  "harry 12299933",
  "sam",
  "edward",
  "harry"
]);


const data = {
  index: {
    "0": {
      name: "joe",
      telephone: '38903570119'
    },
    "1": {
      name: "mary",
      telephone: '380904570112'
    }
    // another 1000 records
  },
  get: function (username) {
    return this.index[username].name + '=' + this.index[username].telephone;
  }
}
// console.log(data.get(1));

// console.log(data.get('marys'));

/*
const string = "Hello there";

if (string.match(!space)) {
  console.log("Hello");
} else {
  console.log('there');
}
*/

/*

 for (const pair of pairs) {
   const i = pair.split(' ');
   phoneBook[i[0]] = i[1];
 }

 for (let i = 0; i < n; i++) {
   if (phoneBook[query[i]]) {
     console.log(`${Object.keys(phoneBook)[i]}=${phoneBook[query[i]]}`);
   } else {
     console.log(`Not found`);
   }
 }

 */