//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (input) => {
  if(input <= 0 || !Number.isInteger(input)){
    throw new Error('Only positive integers are allowed');
  }
  let stepCounter = 0;
  let currentNumber = input;

  while(currentNumber !== 1){
    stepCounter++;

    if((currentNumber & 1) === 0){
      currentNumber = currentNumber / 2;
    } else {
      currentNumber = currentNumber * 3 + 1;
    }
  }
  return stepCounter;
}

// export const steps = (input) => {

//  if(input <= 0){
//    throw new Error('Only positive integers are allowed');
//  }

//   let stepCounter = 0;
//   let currentNumber = input;
//   while(currentNumber !== 1){
//       stepCounter++;
      
//     if(currentNumber === 1)
//     break;
      
//     if(currentNumber % 2 === 0){
//       currentNumber = currentNumber / 2;
//     } else {
//       currentNumber = (currentNumber * 3) + 1;
//     }
//   }

//   return stepCounter;
// };