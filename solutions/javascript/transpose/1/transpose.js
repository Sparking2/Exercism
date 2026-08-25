//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const maxLen = Math.max(0, ...input.map((row) => row.length));
  const result = [];

  for (let j = 0; j < maxLen; j++) {
    let lastRowWithChar = input.length - 1;
    while (lastRowWithChar >= 0 && input[lastRowWithChar][j] === undefined) {
      lastRowWithChar--;
    }

    let colStr = '';
    for (let i = 0; i <= lastRowWithChar; i++) {
      colStr += input[i][j] ?? ' ';
    }

    result.push(colStr);
  }

  return result;
};

// OG
// export const transpose = (input) => {
//     const result = [];
//     if(input.length === 0) return result;
//     for(let i = 0; i < input.length; i++){
//         for(let j = 0; j < input[i].length; j++){
//             const c = input[i][j];
//             const current = result[j] ?? '';
//             result[j] = current + c;
//         }
//     }
//     return result;
// }