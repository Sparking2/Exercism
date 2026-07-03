//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides){
    this.sides = sides.sort((x, y) => x - y);

    const [small, medium, large] = this.sides;

    this.isValid = (small > 0) && (small + medium > large);
  }

  get isEquilateral(){
    if(!this.isValid) return false;

    return this.sides[0] === this.sides[2];
  }

  get isIsosceles(){
    if(!this.isValid) return false;

    return this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2];
  }

  get isScalene(){
    if(!this.isValid) return false;

    return !this.isIsosceles;
  }
}

// function isValidTriangle(sides){
//   if(sides.every(x => x <= 0)){
//     return false;
//   }

 
//  if(sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0]){
//    return false;
//  }
  
//   return true;
// }

// export class Triangle {
  
//   constructor(...sides) {
//     this.sides = sides;
//   }

//   get isEquilateral() {
//     if(!isValidTriangle(this.sides)) return false;

//     return (this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]);
//   }

//   get isIsosceles() {
//     if(!isValidTriangle(this.sides)) return false;
//     return ((this.sides[0] === this.sides[1]) || (this.sides[1] === this.sides[2]) || (this.sides[0] === this.sides[2]));
//   }

//   get isScalene() {
//     if(!isValidTriangle(this.sides)) return false;
//     return((this.sides[0] != this.sides[1]) && (this.sides[1] != this.sides[2]) && (this.sides[0] != this.sides[2]));
//   }
// }
