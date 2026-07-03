//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const complement = Object.freeze({
  G: "C",
  C: "G",
  T: "A",
  A: "U",
});

export const toRna = (input) => {
  const chars = [];
  for(let i = 0; i < input.length; ++i){
    chars.push(complement[input[i]]);
  }
  return chars.join('');
};
