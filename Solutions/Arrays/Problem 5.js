// Chocolate Distribution Problem

let arr = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
let m =7;
let minDiff = [];

//First sort the array in ascending order
arr.sort((a,b)=> a-b); //[2,3,4,7,9,12,56]

for(let i=0;i<arr.length-m+1;i++){
    minDiff.push(arr[i+m-1]-arr[i]);
}
console.log(Math.min(...minDiff));

