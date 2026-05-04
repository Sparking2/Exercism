/// <reference path="./global.d.ts" />
//
// @ts-check

const PIZZA_PRICES = {
  'Margherita': 7,
  'Caprese': 9,
  'Formaggio': 10,
}

const EXTRA_PRICES = {
  'ExtraToppings': 2,
  'ExtraSauce': 1,
}

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const basePrice = PIZZA_PRICES[pizza];

  const calculateExtras = (remainingExtras) =>{
    if(remainingExtras.length === 0){
      return 0;
    }

    const [currentExtra, ...restExtras] = remainingExtras;
    const extraPrice = EXTRA_PRICES[currentExtra] || 0;

    return extraPrice + calculateExtras(restExtras);
  }

  return basePrice + calculateExtras(extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0; 
  
  pizzaOrders.forEach(order => {
    total += pizzaPrice(order.pizza, ...order.extras);
   });

  return total;
}
