//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (input) => {
  const lowerInput = input.toLowerCase();
  const s = new Set();

  for (const char of lowerInput){
    if(char === ' ' || char === '-') continue;

    if(s.has(char)) return false;
    s.add(char);
  }

  return true;
}

// OG
// export const isIsogram = (input) => {
//
//   const lowerInput = input.toLowerCase();
//   const s = new Set([]);
//
//   for (let char of lowerInput) {
//     if(char === '-' || char === ' ') continue;
//     if(!s.has(char)){
//       s.add(char);
//     } else {
//       return false;
//     }
//   }
//
//   return true;
// };
