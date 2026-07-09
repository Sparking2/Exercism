//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const findAnagrams = (target, candidates) => {
  const lowerTarget = target.toLowerCase();
  const sortedTarget = lowerTarget.split('').sort().join('');

  return candidates.filter(candidate => {
    const lowerCandidate = candidate.toLowerCase();

    if(lowerCandidate === lowerTarget || lowerCandidate.length != lowerTarget.length){
      return false;
    }

    return lowerCandidate.split('').sort().join('') === sortedTarget;
  });
}

// OG
// export const findAnagrams = (target, candidates) => {
//    const result = []; 
  
//    const lowerTarget = target.toLowerCase();
//    const lowerCandidates = candidates.map(w => w.toLowerCase());

//    for(let i = 0; i < lowerCandidates.length; i++){
//      const w = lowerCandidates[i];
//      if(w === lowerTarget) continue;

//       const sortedTarget = lowerTarget.split('').sort().join('');
//       const sortedWord = w.split('').sort().join('');

//       if(sortedTarget === sortedWord){
//         result.push(candidates[i]);
//       }
//    }
   
//   return result;
// };
