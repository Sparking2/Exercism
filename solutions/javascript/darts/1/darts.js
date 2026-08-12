//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//               // 0
// out: r = 10;  // 1
// mid: r = 5;   // 5
// cen: r = 1;   // 10

function isValid(n){
  if(typeof n !== 'number' || Number.isNaN(n))
    return false;
  return true;
}

export const score = (x, y) => {

  if(!isValid(x) || !isValid(y)){
    return 0;
  }
  
  const outerRadius = 10;
  const midRadius = 5;
  const centerRadius = 1;

  const position = (x ** 2) + (y ** 2);
  
  if(position <= (centerRadius ** 2)){
    return 10;
  }

  if(position <= (midRadius ** 2)){
    return 5;
  }

  if(position <= (outerRadius ** 2)){
    return 1;
  }

  return 0;
};
