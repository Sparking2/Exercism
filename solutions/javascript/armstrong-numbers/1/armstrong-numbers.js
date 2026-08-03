//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (input) => {
   const digits = `${input}`.split('');
  const numberOfDigits = BigInt(digits.length);

  let total = BigInt(0);
  for (let d of digits) {
    total += BigInt(d) ** numberOfDigits;
  }
 
  return total === BigInt(input);
};
