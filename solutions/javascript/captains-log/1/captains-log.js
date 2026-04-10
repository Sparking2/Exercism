// @ts-check

function getRandomInt(min, max){
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

const PLANET_CLASS = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let code = "NCC-";
  let number = getRandomInt(1000, 9999);
  let shipCode = code+number;
  console.log(shipCode);

  return shipCode;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
   return getRandom(41000.0, 42000.0);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
   let index = getRandomInt(0, PLANET_CLASS.length);
    return PLANET_CLASS[index];
}
