const country = 'United States';
const continent = 'North America';
let population = 331900000;

console.log(`I am from ${country} in ${continent} which has a population of ${population}`) 


const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language)

language = 'English';
//isIsland = true;

const countrySplit =  population/2;

population++;
console.log(population);

console.log('Greater than average finland popuilation?')
const finlandPopulation = 6000000;
console.log(population>finlandPopulation);

console.log('Less than average country population?')
console.log(33000000>population);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;

console.log(description);

/*const numNeighbours = prompt(`How many neighbour countries does your country have?`);

if (Number(numNeighbours) === 1){
  console.log(`Only 1 border!`);
} else if ( numNeighbours > 1){
  console.log(`More than 1 border.`);
} else console.log(`No borders`);

// When using equality opersators, only the strict operator should be used for clean code. This will reduce the amount of bugs. By doing so, we must also convert the type.
*/

if (!isIsland && population < 50000000 && language === `English`){
  console.log(`You should live in ${country}.`);
} else console.log(`You should not live in ${country}.`);
language = `mandarin`
switch(language){
  case `chinese`:
  case `mandarin`:
    console.log(`MOST number of native speakers`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers.`);
    break;
  case 'English':
    console.log(`3rd place`);
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too!`);
}

population >= 33000000 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`)