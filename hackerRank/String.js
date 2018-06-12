function processData(input) {

  const N = arguments.length - 1;
  const string = input[N].split('\n').slice(1);

  /* Works with HackerRacnk
  const N = arguments.length - 1;
  const string = input.split('\n').slice(1);
*/
  for (const char of string) {
    let odd = [];
    let even = [];

    for (let i = 0; i < char.length; i++) {
      if (i % 2 === 0) {
        even.push(char[i]);
      } else {
        odd.push(char[i]);
      }
    }
    even = even.join('');
    odd = odd.join('');

    console.log(`${even} ${odd}`);
  }


}


processData({
  0: '2\nHacker\nRank\nAndriy',
  1: '2\nHacker\nRank'
});