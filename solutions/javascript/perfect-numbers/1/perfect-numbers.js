//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if(number <= 0){
    throw new Error('Classification is only possible for natural numbers.');
  }

  if(number === 1) return 'deficient';

  let sum = 1;
  const sqrt = Math.sqrt(number);

  for(let i = 2; i <= sqrt; i++){
    if(number % i === 0){
      sum += i;

      const partner = number / i;
      if(partner !== i) {
        sum += partner;
      }
    }
  }

  if(sum === number) return 'perfect';
  if(sum > number) return 'abundant';
  return 'deficient';
}

/*
OG
export const classify = (input) => {

    if(input <= 0){
       throw new Error('Classification is only possible for natural numbers.');
    }

  const aliquoutSum = (v) => {
     const factors = [];
    
    for(let i = 0; i < v; i++){
      if(input % i === 0){
        factors.push(i);
      }
    }
    return factors;
  }

  const f = aliquoutSum(input);

  const sum = f.reduce((acc, current) => acc + current, 0);

  if(sum === input) return 'perfect';
  if(sum > input) return 'abundant';
  if(sum < input) return 'deficient';
};
*/