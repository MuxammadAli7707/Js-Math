let matrix = [
  [1, 1, 1, 1],
  [5, 2, 2, 100],
  [9, 4, 2, 1],
];

for(let j = 1; j < matrix[0].length; j++){
  matrix[0][j] += matrix[0][j - 1];
}

for(let j = 1; j < matrix.length; j++){
  matrix[j][0] += matrix[j - 1][0];
}


for(let i = 1; i < matrix.length; i++){
  for(let j = 1; j < matrix[i].length; j++){
    const top = matrix[i - 1][j];
    const left = matrix[i][j - 1];            
    matrix[i][j] += top > left ? left : top;
  }
}
console.log(matrix[matrix.length - 1][matrix[0].length - 1]);


