// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    sum += birdsPerDay[index];
  }
  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const actualWeek = week - 1;
  const startDay = actualWeek * 7;
  let sum = 0;
  for (let index = startDay; index < startDay + 7; index++) {
    sum += birdsPerDay[index];
  }
  return sum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  let add = true;
  for (let index = 0; index < birdsPerDay.length; index++) {
    if(add === true){
      birdsPerDay[index]++;
      add = false;
    } else {
      add = true;
    }
  }
  return birdsPerDay;
}
