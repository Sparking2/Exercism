//
// This is only a SKELETON file for the 'Eliud's Eggs' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue) => {
  if(displayValue === 0) return 0;

  const binary = (displayValue >>> 0).toString(2);

  let totalEggs = 0;
  for(let i = 0; i < binary.length; i++){
    if(binary[i] === '1'){
      totalEggs += 1;
    }
  }
  return totalEggs;
};
