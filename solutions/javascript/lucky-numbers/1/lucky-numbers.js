// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let str1 = '';
  let str2 = '';
  
  array1.map(x => str1 += x);
  array2.map(x => str2 += x);

  return Number(str1) + Number(str2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
   const str = String(value);

  for(let i = 0; i < str.length; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }

  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === '' || input === null || input === undefined){
    return 'Required field';
  }

  if(Number(input) === 0 || isNaN(input)){
    return 'Must be a number besides 0';
  }

  return '';
}
