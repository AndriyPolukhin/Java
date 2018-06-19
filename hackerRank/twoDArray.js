function main() {
  const twoDimentionalArray = Array.from(arguments);
  const arrayList = twoDimentionalArray[0];
  let arrayMain = [];
  let arrayAns = [];

  for (let array = 0; array < arrayList.length; array++) {
    for (let cell = 0; cell < arrayList[array].length; cell++) {
      if (0 < array && array < 5) {
        if (0 < cell && cell < 5) {
          assign(array, cell);
        }
      }
    }
  }

  function assign(arrayPos, cellPos) {
    let dot_a1c1 = arrayList[arrayPos][cellPos];
    let dot_a0c0 = arrayList[arrayPos - 1][cellPos - 1];
    let dot_a0c1 = arrayList[arrayPos - 1][cellPos];
    let dot_a0c2 = arrayList[arrayPos - 1][cellPos + 1];
    let dot_a2c0 = arrayList[arrayPos + 1][cellPos - 1];
    let dot_a2c1 = arrayList[arrayPos + 1][cellPos];
    let dot_a2c2 = arrayList[arrayPos + 1][cellPos + 1];

    arrayMain.push([
      dot_a0c0,
      dot_a0c1,
      dot_a0c2,
      dot_a1c1,
      dot_a2c0,
      dot_a2c1,
      dot_a2c2
    ]);
  }

  for (let i = 0; i < arrayMain.length; i++) {
    arrayAns.push(arrayMain[i].reduce((prev, next) => prev + next));
  }

  arrayAns.sort(function(a, b) {
    return b - a;
  });
  console.log(arrayAns[0]);
}

main([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]);

/*
main([
  ["a0c0", "a0c1", "a0c2", "a0c3", "a0c4", "a0c5"],
  ["a1c0", "a1c1", "a1c2", "a1c3", "a1c4", "a1c5"],
  ["a2c0", "a2c1", "a2c2", "a2c3", "a2c4", "a2c5"],
  ["a3c0", "a3c1", "a3c2", "a3c3", "a3c4", "a3c5"],
  ["a4c0", "a4c1", "a4c2", "a4c3", "a4c4", "a4c5"],
  ["a5c0", "a5c1", "a5c2", "a5c3", "a5c4", "a5c5"]
]);
*/

// 1. Find the dots
// 2. Push the dots to an array
// 3. Shift the dot's ( there are 20 main position)
// 4. Repeat 1 and 2
// 5. Sum each the array
// 6. Pick the biggest number

// let arrayPos = 0;
// let cellPos = 0;
// let mainPos = 20;
