//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  #matrix;
  #columns;

  constructor(input){
    this.#matrix = input.trim().split('\n').map(row => row.trim().split(/\s+/).map(Number));

    const numRows = this.#matrix.length;
    const numCols = numRows > 0 ? this.#matrix[0].length : 0;

    this.#columns = Array.from({length: numCols}, (_, colIndex) => 
      Array.from({ length: numRows }, (_, rowIndex) => this.#matrix[rowIndex][colIndex])
      );
  }

  get rows(){
    return [...this.#matrix];
  }

  get columns(){
    return this.#columns;
  }
}

// function getMatrixDimentions(matrix){
//   let width = 0;
//   let height = matrix.length;
//   for(let i = 0; i < height; ++i){
//     if(matrix[i].length > width){
//       width = matrix[i].length;
//     }
//   }

//   return [width, height];
// }

// export class Matrix {

//   matrix = [];
  
//   constructor(input) {  
//     const rows = input.split('\n');
//     for(const r of rows){
//       const individualElements = r.split(' ');
//       const row = [];
//       for(let element of individualElements){
//         const n = Number(element);
//         row.push(n);
//       }
//       this.matrix.push(row);
//     }
//   }

//   get rows() {
//     const [width, height] = getMatrixDimentions(this.matrix);
    
//     const result = [];
    
//     for (let i = 0; i < height; ++i){
//       const row = [];
//       for(let j = 0; j < width; ++j){
//         row.push(this.matrix[i][j]);
//       }
//       result.push(row);
//     }
    
//     return result;
//   }

//   get columns() {

//     const [width, height] = getMatrixDimentions(this.matrix);

//     const result = [];
    
//     for(let i = 0; i < width; ++i){
//       const column = [];
//       for(let j = 0; j < height; ++j){
//         column.push(this.matrix[j][i]);
//       }
//       result.push(column);
//     }

//     return result;
//   }
// }


