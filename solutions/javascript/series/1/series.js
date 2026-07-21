//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series.length === 0) {
      throw new Error('series cannot be empty');
    }

    this.digits = series.split('').map(digit => Number(digit));
  }

  slices(sliceLength) {
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }

    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }

    if (sliceLength > this.digits.length) {
      throw new Error('slice length cannot be greater than series length');
    }

    const result = [];
    
    // Stop the loop when there aren't enough digits left to make a full slice
    const maxStartIndex = this.digits.length - sliceLength;

    for (let i = 0; i <= maxStartIndex; i++) {
      result.push(this.digits.slice(i, i + sliceLength));
    }

    return result;
  }
}

// OG
/*
export class Series {
    constructor(series){
        if(series.length === 0){
          throw new Error('series cannot be empty');
        }
      
        this.number = series.split('').map(x => Number(x));
    }
    
    slices(sliceLength){
        if(sliceLength < 0){
          throw new Error('slice length cannot be negative');
        }
      
        if(sliceLength === 0){
          throw new Error('slice length cannot be zero');
        }
      
        if(sliceLength > this.number.length){
          throw new Error('slice length cannot be greater than series length');
        }
      
        const result = [];
        
        for(let i = 0; i < this.number.length; i++){
           const s = this.number.slice(i, i + sliceLength);
           if(s.length === sliceLength){
               result.push(s);
           }
        }
        
        return result;
    }
}
*/