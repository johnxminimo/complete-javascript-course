// Coding Challenge #1

function checkWinner(avgDolphins, avgKoalas){
  if (!(avgDolphins/avgKoalas >= 2 || avgKoalas/avgDolphins >=2)) return `Draw`;
  
  if (avgDolphins > avgKoalas){
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
}

const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;

const avgDolphins = calcAverage(44,23,71);
const avgDolphins2 = calcAverage(85,54,41);
const avgKoalas = calcAverage(65, 54, 49);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(avgDolphins2, avgKoalas2));

// Coding Challenge #2

function calcTip(billValue){
  if (billValue>=50 && billValue<=300){
    return billValue * 0.15;
  } else return billValue * 0.2;
}

const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
const total = new Array(tips[0] + bills[0], bills[1] + tips[1], bills[2] + tips[2]);

// Coding Challenge #3 
const mark = {
  firstName: `Mark`,
  lastName: `Miller`,
  weight: 78,
  height: 1.69,

  calcBMI: function(){
    if (!this.bmi) this.bmi = this.weight/this.height**2;
    return this.bmi; 
  },

};
 
const johnPaul = {
  firstName: `John`,
  lastName: `Smith`,
  weight: 92,
  height: 1.95,

  calcBMI: function(){
    if (!this.bmi) this.bmi = this.weight/this.height**2;
    return this.bmi; 
  },

};

let personWithBiggerBMI;
let personWithSmallerBMI;

if (mark.calcBMI() > johnPaul.calcBMI()){
  personWithBiggerBMI = mark;
  personWithSmallerBMI = johnPaul;
} else {
  personWithBiggerBMI = johnPaul;
  personWithSmallerBMI = mark;
} 

console.log(`${personWithBiggerBMI[`firstName`]}'s BMI (${personWithBiggerBMI[`bmi`]}) is higher than ${personWithSmallerBMI[`firstName`]}'s (${personWithSmallerBMI[`bmi`]}).`);



const billsArr = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tipsArr = new Array();
const totalsArr = new Array();

for (let i = 0; i < billsArr.length; i++){
  const current = billsArr[i];
  tipsArr.push(calcTip(current));
  totalsArr.push(tipsArr[i] + current);
}

function calcAverageTotal(arr){
  let currentTotal = 0;
  for (let i = 0; i< arr.length; i++){
    currentTotal+=arr[i];
  }
  return currentTotal/arr.length;
}

const calcAverageTotalArrow = arr => {
  let currentTotal = 0;
  for (let i = 0; i< arr.length; i++){
    currentTotal+=arr[i];
  }
  return currentTotal/arr.length;
}

const calcAverageTotalExpression = function(arr){
  let currentTotal = 0;
  for (let i = 0; i< arr.length; i++){
    currentTotal+=arr[i];
  }
  return currentTotal/arr.length;
}



console.log(billsArr);
console.log(tipsArr);
console.log(totalsArr);
console.log(calcAverageTotal(totalsArr));
console.log(calcAverageTotalArrow(totalsArr));
console.log(calcAverageTotalExpression(totalsArr));

const hasDriversLicense = false;

hasDriversLicense ? console.log(`John has a drivers license`) : console.log(`John does not have a drivers license`);