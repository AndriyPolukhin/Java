function processData(input) {

  // let argsInput = input;
  // console.log(argsMain[0]);
  // console.log([input[0]], input);

  let z = 0;
  while (z < 10) {

    const args = Array
      .from(input[z])
      .join('')
      .toString()
      .split('\n')
      .slice(1);
    console.log(args);


    /*
        for (let i = 0; i < args[z].length; i++) {

          let odd = ['odd'];
          let even = ['even'];

          /*
          const s = Array.from(args[z]);
          let y = 0;
          while (y < s.length) {
            if (y % 2 === 0) {
              even.push(s[y]);
            } else {
              odd.push(s[y]);
            }
            y += 1;
          }

          even = even.join('');
          odd = odd.join('');

          console.log(`${even} ${odd}`);
        }
        */
  }
  z += 1;
}


processData({
  0: '2\nHacker\nRank\nAndriy',
  1: '2\nHacker\nRank'
});