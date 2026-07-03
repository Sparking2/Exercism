//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTH_YEAR_SECONDS = 31_557_600;

const PLANET_ORBITAL_RATIONS = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const rountToTwo = (number) => Math.round(number * 100) / 100;

export const age = (planet, seconds_old) => {
  const ratio = PLANET_ORBITAL_RATIONS[planet.toLowerCase()];

  if(!ratio && planet !== "earth"){
    throw new Error("not a planet");
  }

  const seconds_in_planet_year = EARTH_YEAR_SECONDS * ratio;
  return rountToTwo(seconds_old / seconds_in_planet_year);
};
