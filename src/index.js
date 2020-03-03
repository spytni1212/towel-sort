
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined) {
      return [];
  } else {
      for (let i = 0; i < matrix.length; i++) {
          if (i === 1 || i === 3 ) {
              matrix[i].reverse();
          }
          for (let j = 0; j < matrix[i].length; j++) {
              arr.push(matrix[i][j]);
          }
      }
  }
  return arr;
}
