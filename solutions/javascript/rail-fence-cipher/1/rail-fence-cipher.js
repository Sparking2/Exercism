//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const replaceCharAt = (str, index, chr) => {
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index + 1);
}

const buildRails = (lines, length = 25) => {
  const rails = new Array(lines).fill('');
  let isForward = true;
  let current = 0;

  for(let i = 0; i < length; i++){
    for(let j = 0; j < lines; j++){
      if( j === current){
        rails[j] += '?';
      } else {
        rails[j] += '.';
      }
    }

    if(isForward){
      current++;
      if(current > lines - 1){
        isForward = !isForward;
        current -= 2;
      }
    } else {
      current--;
      if(current < 0){
        isForward = !isForward;
        current += 2;
      }
    }
  }

  return rails;
}

function replaceRails(rails, message){
  for(let i = 0; i < message.length; i++){
    let c = message[i];
    if(c === ' ') continue;

    for(let j = 0; j < rails.length; j++){
      if(rails[j][i] !== '.'){
        rails[j] = replaceCharAt(rails[j], i,c);
      }
    }
  }
}

export const encode = (message, lines) => {
  const rails = buildRails(lines, message.length);

  replaceRails(rails, message);

  let result = '';
  rails.map(r => {
    result += r.split('.').join('');
  });

  return result;
};

export const decode = (message, lines) => {
  const rails = buildRails(lines,message.length);
  console.log(rails);

  let index = 0;
  for(let i = 0; i < rails.length; i++){
    for(let j = 0; j < rails[i].length; j++){
      if(rails[i][j] === '?'){
        rails[i] = replaceCharAt(rails[i], j, message[index]);
        index++;
      }
    }
  }
  console.log(rails);

  let result = '';
  for(let i = 0; i < message.length; i++){
    for(let j = 0; j < rails.length; j++){
      if(rails[j][i] !== '.'){
        result += rails[j][i];
        break;
      }
    }
  }

  return result;
};
