//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (input) => {
  return Object.entries(input).reduce((acc, [value, letters]) => {
    for(const letter of letters){
      acc[letter.toLowerCase()] = Number(value);
    }
    return acc;
  }, {});
}

// export const transform = (input) => {
//   const result = {};
//    for (const [value, array] of Object.entries(input)){
//      for(const entry of array){
//        result[entry.toLowerCase()] = Number(value);
//      }
//    }
//   return result;
// };
