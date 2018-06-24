const actress = {
  firstName: 'Anastasia',
  lastName: 'Polukhina',
  dataOfBirth: 'May 06,1989',
  nationality: 'Ukrainian',
  firstMovie: 'The Queen'
};

for (const property in actress) {
  console.log("actress." + property + " = " + actress[property]);
}


class Engineer {
  constructor(name, home, description) {
    this.name = name;
    this.home = home;
    this.description = description;
  }
}

function main(input) {
  const engineer = new Engineer(arguments[0], arguments[1], arguments[2]);

  console.log(engineer);

  for (let property in engineer) {
    console.log(
      property + ': ' + engineer[property]
    );
  }
}

main('Andriy', 'Hamburg', 'The Queens Husband');

function print(input) {
  const array = input.split(new RegExp("[ \n]+"));
  console.log(array);

  for (let value of array) {
    console.log(value);
  }
}

print('hi bye hello goodbye');


let girlfriend = new Map([
  ['firstName', 'Anastasia'],
  ['lastName', 'Tsukrova'],
  ['dataOfBirth', 'May 06, 1989'],
  ['nationality', 'Ukrainian'],
  ['boyfriend', 'Andriy Polukhin']
]);

for (let info of girlfriend) {
  console.log(info);
}

console.log();
for (let info of girlfriend) {
  console.log(info[0] + ": " + info[1]);
}