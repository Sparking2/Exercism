//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
 if(!input) return false;
  const letters = input.toLowerCase().match(/[a-z]/g);
  return letters ? new Set(letters).size === 26 : false;
};
