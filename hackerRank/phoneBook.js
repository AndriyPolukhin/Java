function processData(input) {
  const phoneBook = {};
  const n = parseInt(input[0]);
  const pairs = input.slice(1, n + 1);
  const query = input.slice(input.length - pairs.length);

  for (const pair of pairs) {
    const i = pair.split(" ");
    phoneBook[i[0]] = i[1];
  }

  for (let i = 0; i < n; i++) {
    if (phoneBook[query[i]]) {
      console.log(`${Object.keys(phoneBook)[i]}=${phoneBook[query[i]]}`);
    } else {
      console.log("Not found");
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

/*
var data = {
  index: {
            "joeb": {name: "joe", surname: "bloggs", age: 29 },
            "marys": {name: "mary", surname: "smith", age: 25 }
            // another 1000 records
         },
  get: function(username) {
            return this.index[username];
         }
}

*/
