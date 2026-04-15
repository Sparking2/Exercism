// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map(x => x * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const indexes = [];
  for (let i = 0; i < deck.length; i++){
    if(deck[i] === 3){
      indexes.push(i !== 0 ? i + 2 : i);
    }
  }

  for(let i = 0; i < indexes.length; i++){
    deck.splice(indexes[i], 0, 3, 3);
  }
  
  return deck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const mid = Math.floor(deck.length / 2);
  return deck.slice(mid - 1, mid + 1);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const top = deck.shift();
  const bot = deck.pop();
  deck.splice((deck.length / 2), 0, bot, top);
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter(x => x === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  deck.sort((a, b) => {
    if(a > b)
      return 1;
    if(b > a)
      return -1;
    return 0;
  });
  return deck;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  deck.reverse();
  return deck;
}
