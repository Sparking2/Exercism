//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  //  if(input.length <= 0){
  //   return "";
  // }
  // const result = [];
  // for(let i = input.length - 1; i >= 0; --i){
  //   result.push(input[i]);
  // }
  // return result.join('');
  let result = '';
  for(let i = input.length - 1; i >= 0; i--){
    result += input[i];
  }
  return result;
};
