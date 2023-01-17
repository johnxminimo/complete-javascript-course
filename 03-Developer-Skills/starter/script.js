// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// What is temperature amplitude? Answer: difference between highest and lowest temp.

// - How to compute max and min
// - What's a sensor error and what to do if it occurs.

function printForecast(temperatureArray){
  // First we want to run through the array.
  if (!Array.isArray(temperatureArray)){
    console.log(`Error: The given input is not an array.`);
    return;
  }

  for (let i = 0; i < temperatureArray.length; i++){
    console.log(`It will be ${temperatureArray[i]} degrees in ${1+i} days.`);
  }
}

printForecast(Array(17,21,23));
printForecast(Array(12, 5, -5, 0, 4));