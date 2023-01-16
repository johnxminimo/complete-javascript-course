`use strict`;

// Assignment 1
function describeCountry(country, population, capitalCity){
  const output = `${country} has ${population} people and its capital city is ${capitalCity}`;
  return output;
}

const unitedStates = describeCountry(`United States`, `331,000,000`, `Washington, D.C.`);
const canada = describeCountry(`Canada`, `38,250,000`, `Ottawa`);
const mexico = describeCountry(`Mexico`, `126,700,000`, `Mexico City`);

console.log(unitedStates);
console.log(canada);
console.log(mexico);

function percentageOfWorld1(population){
  return population/7900000000 * 100;
}

const unitedStatesPopulation = 344190000;
const chinaPopulation = 1441000000;

const percentageOfWorld2 = function (population){
  return population/7900000000 * 100;
}

// Arrow function assignment
const percentageOfWorld3 = (population) => population/7900000000 * 100;


console.log(percentageOfWorld1(unitedStatesPopulation));
console.log(percentageOfWorld2(unitedStatesPopulation));
console.log(percentageOfWorld1(chinaPopulation));
console.log(percentageOfWorld2(chinaPopulation));
console.log(percentageOfWorld3(chinaPopulation));


function describePopulation(country, population){
  const percentageOfWorldVal = percentageOfWorld2(population);
  return `${country} has a population of ${population} people and has ${percentageOfWorldVal}% of the world's population.`;
}

console.log(describePopulation(`United States`, unitedStatesPopulation));
console.log(describePopulation(`Mexico`, 126700000));
console.log(describePopulation(`China`, chinaPopulation));

const arrOfPopulations = new Array(1441000000, 331000000, 1441000000, 126700000);

console.log(4 == arrOfPopulations.length);

const arrOfPopulationPercentages = new Array(percentageOfWorld1(arrOfPopulations[0]), percentageOfWorld1(arrOfPopulations[1]), percentageOfWorld1(arrOfPopulations[2]), percentageOfWorld1(arrOfPopulations[3]));

console.log()

const neighbors = new Array(`Canada`, `Mexico`);
neighbors.push(`Utopia`);
neighbors.pop();

if (!neighbors.includes(`Germany`)){
  console.log(`Probably not a central European country.`);
}

neighbors[neighbors.indexOf('Canada')] = `Republic of Canada`;

const myCountry = {
  countryName: `United States`,
  capital: `Washington, D.C.`,
  language: `English`,
  population: 331000000,
  neighbors: neighbors,

  describe: function(){
    console.log(`${this.countryName} has ${this.population} ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`);
  },

  checkIsland: function(){
    return this.neighbors.length === 0;
  }

};

myCountry.describe();
console.log(myCountry.checkIsland());

const arrOfPopulationPercentages2 = new Array();
for (let i = 0; i< arrOfPopulations.length; i++){
  arrOfPopulationPercentages2.push(percentageOfWorld1(arrOfPopulations[i]));
}
console.log(arrOfPopulationPercentages2);
console.log(arrOfPopulationPercentages);

const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i< listOfNeighbors.length; i++){
  for (let j = 0; j< listOfNeighbors[i].length; j++){
    console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
  }
}

let i = 0;
const arrOfPopulationPercentages3 = new Array();
while (i < arrOfPopulations.length){
  arrOfPopulationPercentages3.push(percentageOfWorld1(arrOfPopulations[i]));
  i++;
}
console.log(arrOfPopulationPercentages3);