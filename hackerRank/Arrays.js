/*
Task
Given an array, , of  integers,
print 's elements
in reverse order as a single line
of space-separated numbers.

Input Format

The first line contains an integer,  (the size of our array).
The second line contains  space-separated integers describing array 's elements.

Print the elements of array  in reverse order as a single line of space-separated numbers.

 n = 4
arr = [1, 4, 3, 2]

answer = 2 3 4 1
*/

const n = 4;
const arr = [1, 4, 3, 2];

const reverse = arr.reverse();
let answer = '';
for (let i = 0; i < n; i++) {
  answer += reverse[i];
  if (i < n - 1) {
    answer += ' ';
  }
}
console.log(answer.trim());