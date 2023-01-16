/*

Lesson 1:
let js = 'amazing';
console.log(40+8+23-10);

let firstName = "John";
console.log(firstName);

*/

/*
let javascriptIsFun = true;

// typeof built in method that returns the type of a variable
console.log(typeof javascriptIsFun);

// Since javascript is dynamically typed, you can reassign variables to different data types.
javascriptIsFun = 45;
console.log(typeof javascriptIsFun)
// Initially returned boolean, but is now a number.

*/

/*
const now = 2037;
const ageJohn = now - 2003;

console.log(ageJohn);

console.log(ageJohn * 2) // multiplication
console.log(ageJohn / 2) // division
console.log(ageJohn ** 2) // Exponential operator

// + can be used to concatenate string.

// Assignment operators
let x = 10 + 5;
*/
/*
const firstName = 'John';
const occupation = 'student';
const birthYear = 2003;
const year = 2037

const stringLiteral = "Hi, I'm " + firstName + ", a " + (year - birthYear) + " year old " + occupation + "!";

console.log(stringLiteral);

const templateLiteral = `I'm ${firstName}, a ${year - birthYear} year old ${occupation}!`;

console.log(templateLiteral);
*/

/*

const age = 12;
const legalDrivingAge = 16;
const isOldEnough = age >= legalDrivingAge;

if(isOldEnough) {
  console.log(`John can start driving.`);
} else {
  const yearsLeft = legalDrivingAge - age;
  console.log(`John can't drive yet, wait another ${yearsLeft} years.`);
}

const birthYear = 2003;
let century;
if (birthYear <= 2000){
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// 5 falsy values: 0, '', undefined, null, NaN when converted into boolean, anything else will be converted into true

/*
const age = 18;
if (age === 18){
  console.log(`You are now 18`);
}
*/

switch(day){
  case 'monday':
    console.log('I plan to take a break');
    break;
  case `tuesday`:
    console.log(`It is now tuesday.`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Writing code on how to write switch statements.');
    break;
  case `friday`:
    console.log("It is now friday");
    break;
  case 'saturday':
  case 'sunday':
    console.log(`Welcome to the weekend.`);
  default: 
    console.log('Not a valid input.');
  }
