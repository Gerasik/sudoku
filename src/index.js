module.exports = function solveSudoku(matrix) {
  // your solution
  
  findZero(matrix);

  function findZero(matrix){
    for(let row = 0; row < matrix.length; row++){
      if (matrix[row].indexOf(0) >= 0){
        let col = matrix[row].indexOf(0);
        let num = 1;
        do{
          // console.log('row: '+row + ', col: '+col + ', num: ' + num + ' zz ' +checkCol(matrix, col, num)+ ' zz ' + checkRow(matrix, row, num)+ ' zz ' + checkBox(matrix, col, row, num)) 
          if (chechNumber(matrix, col, row, num)){
            matrix[row][col] = num;
            if (findZero(matrix)){
              // break;
              return true;
            }
          }  
          num ++;         
        }while(num < 10)
        matrix[row][col] = 0;
        return false;
        // matrix[row][col] = 99;
        // findZero(matrix);
      }else if(row == 8 && matrix[row].indexOf(0) == -1){
        return true;
      } 
      // console.log(matrix[row] + 'row: ' + row);      
    } 
  } 



  function checkCol(matrix, col, num){
    for (var i = 0; i < 9 ; i++){
      if (matrix[i][col] == num)  {return false;}
    }
    return true;
  };

  function checkRow(matrix, row, num){
    return (matrix[row].indexOf(num) == -1)? true : false;
  };

  function checkBox(matrix, col, row, num){
    let c = Math.floor(col/3)*3;
    let r = Math.floor(row/3)*3;
    for (let i = c; i < c + 3; i++){
        for(let j = r; j < r + 3; j++){
            if (matrix[j][i] == num){return false;}
        }
    }
    return true;
  };

  function chechNumber(matrix, col, row, num){
      return checkBox(matrix, col, row, num) && checkRow(matrix, row, num) && checkCol(matrix, col, num);
  };



  // console.log(matrix[0]);
  // console.log(matrix[1]);
  // console.log(matrix[2]);
  // console.log(matrix[3]);
  // console.log(matrix[4]);
  // console.log(matrix[5]);
  // console.log(matrix[6]);
  // console.log(matrix[7]);
  // console.log(matrix[8]);
  return matrix;
}



// console.log(solveSudoku([
//     [6, 5, 0, 7, 3, 0, 0, 8, 0],
//     [0, 0, 0, 4, 8, 0, 5, 3, 0],
//     [8, 4, 0, 9, 2, 5, 0, 0, 0],
//     [0, 9, 0, 8, 0, 0, 0, 0, 0],
//     [5, 3, 0, 2, 0, 9, 6, 0, 0],
//     [0, 0, 6, 0, 0, 0, 8, 0, 0],
//     [0, 0, 9, 0, 0, 0, 0, 0, 6],
//     [0, 0, 7, 0, 0, 0, 0, 5, 0],
//     [1, 6, 5, 3, 9, 0, 4, 7, 0]]));
// console.log(solveSudoku([
//   [5, 3, 4, 6, 7, 8, 9, 0, 0],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]));

// console.log(solveSudoku([
//   [6, 5, 0, 7, 3, 0, 0, 8, 0],
//   [0, 0, 0, 4, 8, 0, 5, 3, 0],
//   [8, 4, 0, 9, 2, 5, 0, 0, 0],
//   [0, 9, 0, 8, 0, 0, 0, 0, 0],
//   [5, 3, 0, 2, 0, 9, 6, 0, 0],
//   [0, 0, 6, 0, 0, 0, 8, 0, 0],
//   [0, 0, 9, 0, 0, 0, 0, 0, 6],
//   [0, 0, 7, 0, 0, 0, 0, 5, 0],
//   [1, 6, 5, 3, 9, 0, 4, 7, 0]
// ]));


// console.log(solveSudoku([
//   [5, 3, 4, 6, 7, 8, 9, 0, 0],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]));