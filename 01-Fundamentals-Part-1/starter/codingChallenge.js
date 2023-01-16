/*
// Coding Challenge #1 and #2
// BMI = mass / height ** 2
const markMassFirst = 78;
const markHeightFirst = 1.69;
const johnMassFirst = 92;
const johnHeightFirst = 1.95;

const markMassSec = 95;
const makrHeightSec = 1.88;
const johnMassSec = 85;
const johnHeightSec = 1.76;

const markBMIFirst = markMassFirst / (markHeightFirst ** 2);
const johnBMIFirst = johnMassFirst / (johnHeightFirst ** 2);
console.log(markBMIFirst, johnBMIFirst);

const markHigherBMIFirst =  markBMIFirst>johnBMIFirst;
console.log(markHigherBMIFirst);

if (markHigherBMIFirst){
  console.log(`Mark's BMI (${markBMIFirst}) is higher than John's (${johnBMIFirst}). `);
} else {
  console.log(`John's BMI (${johnBMIFirst}) is higher than Mark's (${markBMIFirst}). `);
}

const markBMISec = markMassSec / (makrHeightSec ** 2);
const johnBMISec = johnMassSec / (johnHeightSec ** 2);
console.log(markBMISec, johnBMISec);

const markHigherBMISec =  markBMISec>johnBMISec;
console.log(markHigherBMISec);


if (markHigherBMISec){
  console.log(`Mark's BMI (${markBMISec}) is higher than John's (${johnBMISec}). `);
} else {
  console.log(`John's BMI (${johnBMISec}) is higher than Mark's (${markBMISec}). `);
}
*/
/*
// Coding Challenge #3
const dolphinsAverageScore = (96+108+89)/3;
const koalasAverageScore = (88+91+110)/3;

if (dolphinsAverageScore == koalasAverageScore && dolphinsAverageScore > 100)
  console.log(`It was a tie!`)
else if ((dolphinsAverageScore>koalasAverageScore) && dolphinsAverageScore > 100)
  console.log(`The dolphins won!`);
else if (koalasAverageScore > 100) 
  console.log(`The koalas won!`);
else console.log(`No one reached a score over 100`);
*/
//const subtotal = 275;
//const subtotal = 40;
const tip = subtotal>= 50 && subtotal<=300 ? subtotal*0.15 : subtotal*0.2;
const total = subtotal + tip;

console.log(`The bill was ${subtotal}, the tip was ${tip}, and the total value is ${total}.`);