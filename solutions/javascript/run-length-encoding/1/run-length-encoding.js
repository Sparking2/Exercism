//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  if(!input) return '';

  let output = '';
  let previousChar = input[0];
  let previousCount = 1;

  for (let i = 1; i < input.length; i++){
    const char = input[i];

    if(char === previousChar){
      previousCount++;
    } else {
      output += (previousCount > 1 ? previousCount : '') + previousChar;
      previousChar = char;
      previousCount = 1;
    }
  }

  return output + (previousCount > 1 ? previousCount : '') + previousChar;
};

export const decode = (input) => {
  if(!input) return '';

  let output = '';
  let num = '';

  for(const char of input){
    if(isNaN(char) || char === ' '){
      const count = num ? Number(num) : 1;
      output += char.repeat(count);
      num = '';
    } else {
      num += char;
    }
  }

  return output;
}

/*
// OG
export const encode = (input) => {
    let output = '';
    if(input === '') return output;
    
    let previousChar = '';
    let previousCount = 0;
    
    for(let i = 0; i < input.length; i++){

        const letter = input[i];
        
        if(i === 0){
            previousChar = letter;
            previousCount = 1;
            continue;
        }
        
        if(letter === previousChar){
            previousCount++;
            continue;
        }
        
        output += `${previousCount > 1 ? previousCount : '' }${previousChar}`
        
        previousChar = letter;
        previousCount = 1;
    }
    
        output += `${previousCount > 1 ? previousCount : '' }${previousChar}`
    
    return output;
}

export const decode = (input) => {
    let output = '';
    if(input === '') return output;
    
    let num = '';
    let previousChar = '';
    
    for(let i = 0; i < input.length; i++){
        const char = input[i];
        
        if(isNaN(char) || char === ' '){
            if(num !== ''){
                for(let j = 0; j < Number(num); j++){
                    output += char;
                }
                num = '';
            } else {
                output += char;
            }
            continue;
        }
        
        num += char;
    }
    
    return output;
}
*/