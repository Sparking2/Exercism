/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime){
  if(remainingTime === undefined){
    return 'You forgot to set the timer.';
  }
  
  if(remainingTime === 0){
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}

export function preparationTime(layers, averageTime = 2){
  return layers.length * averageTime;
}

export function quantities(layers){
  const result = {
    noodles: 0,
    sauce: 0,
  };

  layers.map( l => {
    if(l === 'noodles')
      result.noodles += 50;
    if(l === 'sauce')
      result.sauce += 0.2;
  });
  
  return result;
}

export function addSecretIngredient(friendList, myList){
  const lastItem = friendList[friendList.length - 1];
  myList.push(lastItem)
}

export function scaleRecipe(recipe, portions){
  const modifiedRecipe = {};
  let scale = 1;
  if(portions === 1){
    scale = 0.5;
  } else {
    scale = portions / 2;
  }

  for(const ingredient in recipe){
    modifiedRecipe[ingredient] = recipe[ingredient] * scale;
  }

  return modifiedRecipe;
}