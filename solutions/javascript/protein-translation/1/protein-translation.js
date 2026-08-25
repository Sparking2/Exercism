//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CODON_MAP = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine', UUC: 'Phenylalanine',
  UUA: 'Leucine', UUG: 'Leucine',
  UCU: 'Serine', UCC: 'Serine', UCA: 'Serine', UCG: 'Serine',
  UAU: 'Tyrosine', UAC: 'Tyrosine',
  UGU: 'Cysteine', UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP', UAG: 'STOP', UGA: 'STOP',
};

export const translate = (rna = '') => {
  if (!rna) return [];

  const result = [];

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);

    const aminoAcid = CODON_MAP[codon];
    
    if (!aminoAcid) {
      throw new Error('Invalid codon');
    }

    if (aminoAcid === 'STOP') {
      break;
    }

    result.push(aminoAcid);
  }

  return result;
};

/*
// OG
export const translate = (input) => {
      const result = [];  
  
    if(!input){
      return result;
    }

    if(input.length % 3 !== 0 && input.length < 6){
      throw new Error('Invalid codon');
    }
  
    input = input.toUpperCase();

    const codons = input.match(/.{3}/g);
       
    for(let i = 0; i < codons.length; i++){
        const c = codons[i];
        
        switch(c){
            case 'AUG':
                result.push('Methionine');
                break;
            case 'UUU':
            case 'UUC':
                result.push('Phenylalanine');
                break;
            case 'UUA':
            case 'UUG':
                result.push('Leucine');
                break;
            case 'UCU':
            case 'UCC':
            case 'UCA':
            case 'UCG':
                result.push('Serine');
                break;
            case 'UAU':
            case 'UAC':
                result.push('Tyrosine');
                break;
            case 'UGU':
            case 'UGC':
                result.push('Cysteine');
                break;
            case 'UGG':
                result.push('Tryptophan');
                break;
            case 'UAA':
            case 'UAG':
            case 'UGA':
                return result;
          default:
            throw new Error('Invalid codon');
        }
    }
    
    return result;
};
*/