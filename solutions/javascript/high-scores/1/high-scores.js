//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this._scores = Object.freeze([...scores]);
  }
  get scores(){
    return this._scores;
  }
  get latest(){
    return this._scores[this._scores.length - 1];
  }
  get personalBest(){
    return Math.max(...this._scores);
  }
  get personalTopThree(){
    return [...this._scores].sort((a,b) => b - a).slice(0,3);
  }
}

// og
// export class HighScores {
//   constructor(input) {
//     this.scoreArray = input;
//     Object.freeze(this.scoreArray);
//   }
//   get scores() {
//     return this.scoreArray;
//   }
//   get latest() {
//     return this.scoreArray[this.scoreArray.length - 1];
//   }
//   get personalBest() {
//     const sorted = [...this.scoreArray].sort((a,b) => a < b);
//     return sorted[0];
//   }
//   get personalTopThree() {
//     const sorted = [...this.scoreArray].sort((a,b) => a < b);
//     return [sorted[0], sorted[1], sorted[2]];
//   }
// }
