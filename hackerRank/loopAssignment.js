function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];

  for (let c of s) {
    switch (c) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'y':
        vowels.push(c);
        break;
      default:
        consonants.push(c);
    }
  }
  for (let c of vowels) {
    console.log(c);
  }
  for (let c of consonants) {
    console.log(c);
  }

}
vowelsAndConsonants('javascriptloops');