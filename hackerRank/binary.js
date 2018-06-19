/*
    while (n > 0):
      remainder = n % 2;
    n = n / 2;
    Insert remainder to front of a list or push onto a stack
    Print list or stack
*/

function main(n) {
  // Turn to Binary
  let x = n;
  let stack = [];
  while (x > 0) {
    let rest = x % 2;
    x = parseInt(x / 2);
    stack.push(rest);
  }
  console.log(`${n} : ${stack.join('')}`);


  // Calculate number of consecutive 1's
  // Step 1:
  /*
  let result = 1;
  for (let i = 0; i < stack.length; i++) {
    let prev = stack[i];
    let next = stack[i + 1];
    if ((prev === 1) && (next === 1)) {
      result += 1;
    } else if ((prev === 1) && (next === 0)) {
      result += 0;
    }
  }
  console.log(result);
  */


  // Step 2:
  /*
  let string = stack.join('').split('0').filter(one => one > 1);
  console.log(string);
  let answer = (string.length > 0) ? string.length : 1;
  console.log(answer);
*/
  // Step 3:
  let string = stack.join('').split('0').sort(function (a, b) {
    return b - a;
  });
  let sum = Array.from(string[0]).map(one => parseInt(one)).reduce((prev, next) => prev + next);
  console.log(sum);
  // console.log('The sum is :' + sum);





}

main(13);
main(1335);
main(951);
main(5);
main(6);