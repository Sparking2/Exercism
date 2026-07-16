//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  const stack = [];

  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const openingBrackets = new Set(['(', '[', '{']);

  for (const char of input){
    if(openingBrackets.has(char)){
      stack.push(char);
    } else if(char in bracketMap){
      const lastOpen = stack.pop();
      if(lastOpen !== bracketMap[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// OG
// export const isPaired = (input) => {
//   const map = new Map([
//     ['[', 0],
//     ['(', 0],
//     ['{', 0],
//   ]);
//   for(let i = 0; i < input.length; i++){
//     const char = input[i];
//     if(map.has(char)){
//       const value = map.get(char);
//       map.set(char, value + 1);
//       continue;
//     }
//     const nextChar = String.fromCharCode(char.charCodeAt(0) - 1);
//     const nextChar2 = String.fromCharCode(char.charCodeAt(0) - 2);
//     if(map.has(nextChar)){
//       const value = map.get(nextChar);
//       map.set(nextChar, value - 1);
//     } else if(map.has(nextChar2)){
//       const value = map.get(nextChar2);
//       map.set(nextChar2, value - 1);
//     } 
//   if([...map.values()].some(value => value < 0)){
//     return false;
//   }
//   }
//   return [...map.values()].every(value => value === 0);
// };
