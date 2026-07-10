//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (input) => {
   return input.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"")
            .split(/[\s-]/)
            .filter(x => x.length > 0)
            .reduce((acc,current) => acc + current[0].toUpperCase(), "");
};
