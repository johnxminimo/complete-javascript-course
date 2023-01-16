`use strict`; // causes bad code to throw errors instead of failing silently

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);
*/

/*
function logger(){
  console.log(`My name is John`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 4)); */
// Function expressions and declarations
/*
// Example of a function declaration. This function has a name
function calcAge1(birthYear){
  return 2022 - birthYear;
}
const age1 = calcAge1(2003);
console.log(calcAge1(2003));

// Example of an anonymous function or a function expression. This expression has no name and is called directly within a vairable 
const calcAge2 = function (birthYear){
  return 2022 - birthYear;
}

const age2 = calcAge2(2001)

console.log(age1, age2)

// Function declarations can be called before they are written.

// Expressions cannot be called until expression is written.
*/
/*
// Arrow functions
// Example of a function declaration. This function has a name
function calcAge1(birthYear){
  return 2022 - birthYear;
}

// Single line arrow function
// Result is implicitly returned
const calcAge3 = (birthYear, ageAdded) => 2022 - birthYear + ageAdded;

// Multi line arrow function
// Have to explictly return value;
const yearsToRetire = birthYear => {
  const age = 2022- birthYear;
  const retirementAge = 65;
  return retirementAge - age;
}
console.log(calcAge3(2003, 4));
console.log(yearsToRetire(2003))
*/

/*

// Cut fruit into 4 pieces.
function cutFruitPieces(fruit){
  return fruit*4
}

function fruitProcessor(apples, oranges){

  const cutApples = cutFruitPieces(apples);
  const cutOranges = cutFruitPieces(oranges);

  console.log(apples, oranges);
  console.log(cutApples, cutOranges);
  const juice = `${cutApples} apple pieces and ${cutOranges} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(3, 2));
*/
/*
const friend1 = `Micheal`;
const friend2 = `Steven`;

// 2 Ways of instantiatinga an array.
const friends = ['Michael', `Steven`, `Peter`];
const years = new Array(1991, 1984, 2008, 2020);

console.log(years.length); // returns array;

friends.push(`John`); // This adds to the end of the array.

// Instantiating an object.
const john = {
  firstName: `John`,
  lastName: `Minimo`,
  age: 2022-2003,
  occupation: `Student`
};

console.log(john[`occupation`]); // Bracket Notation
console.log(john.occupation); // Dot notation
*/

/*
const john = {
  firstName: `John`,
  lastName: `Minimo`,
  birthYear: 2003,
  occupation: `Student`,
  hasDriversLicense: true,

  calcAge: function(){
    if (!this.age) this.age = 2022-this.birthYear;
    return this.age;
  }
};
console.log(john["calcAge"]());
console.log(john["age"]);

*/

for (let rep = 1; rep <= 10; rep++){
  console.log(`You are at rep ${rep}`);
}