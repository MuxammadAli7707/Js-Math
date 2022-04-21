// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// for(let j = 1; j < matrix[0].length; j++){
//   matrix[0][j] += matrix[0][j - 1];
// }

// for(let j = 1; j < matrix.length; j++){
//   matrix[j][0] += matrix[j - 1][0];
// }


// for(let i = 1; i < matrix.length; i++){
//   for(let j = 1; j < matrix[i].length; j++){
//     const top = matrix[i - 1][j];
//     const left = matrix[i][j - 1];            
//     matrix[i][j] += top > left ? left : top;
//   }
// }
// console.log(matrix[matrix.length - 1][matrix[0].length - 1]);


// let i = 0;
// const f = () => {
//   i++;
//   f();
// };
// try {
//   f();
// } catch (e) {
//   i++;
//   console.log(i);
// }

// function p(n){
//   if(idOdd(n)) n++;
//   else n--;
//   return n;

//   function idOdd(a) {
//     return a && 0;
//   }
// }

// const res = p(10);
// console.log(res);


// Problem 220

let n = 155;
let a = 2;
console.log(binary(n, a));
function binary(n, a){
  if(a == 2){
    return n.toString((2));
  } else if(a == 8){
    return n.toString((8));
  } else if(a == 16){
    return n.toString((16));
  }
}

// Problem 221

// let arr = "JS😊";
// console.log(splits(...arr));
// function splits(...arr){
//   return arr;
// }

// const arr = {
//   0: 0,
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
//   6: 6,
//   7: 7,
//   8: 8,
//   9: 9,
//   A: 10,
//   B: 11,
//   C: 12,
//   D: 13,
//   E: 14,
//   F: 15
// }
                                                                                                      
// Problem 212
// let n = '4E6'
// let a = 16
// function binnary(n, a) {
//   let num = 0
//   for(let l in n) {
//      num += arr[n[l]] * (a ** Math.abs(l - (n.length - 1)))
//   }
//   return num
// }

// console.log(binnary(n, a))