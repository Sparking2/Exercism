//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND_MS= 1_000_000_000 * 1_000;

export const gigasecond = (input) => {
  const date = new Date(input.getTime() + GIGASECOND_MS);
 return date;
}
