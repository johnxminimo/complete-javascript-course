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