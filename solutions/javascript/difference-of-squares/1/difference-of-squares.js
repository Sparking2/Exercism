//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Squares {
  constructor(input){
    this.n = input;
  }

  get sumOfSquares(){
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }

  get squareOfSum(){
    const sum = (this.n * (this.n + 1)) / 2;
    return sum * sum;
  }

  get difference(){
    return this.squareOfSum - this.sumOfSquares;
  }
}

// My solution without algorithms
// export class Squares {
//   constructor(input) {
//     this.naturals = input;
//     console.log(this.naturals);
//   }

//   get sumOfSquares() {
//     let sum = 0;
//     for(let i = 0; i <= this.naturals; i++){
//       sum += (i * i);
//     }
//     return sum;
//   }

//   get squareOfSum() {
//     let sum = 0;
//     for(let i = 0; i <= this.naturals; i++){
//       sum += i;
//     }

//     return sum * sum;
//   }

//   get difference() {
//     return Math.abs(this.sumOfSquares - this.squareOfSum);
//   }
// }
