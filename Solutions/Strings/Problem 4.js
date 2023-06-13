// Remove Consecutive Characters

let S = "ababb";
let arr = S.split("");
let newArr = [arr[0]]; // Initialize newArr with the first character of arr
let i = 1; // Start from the second character

while (i < arr.length) {
  if (arr[i] !== arr[i - 1]) {
    newArr.push(arr[i]);
  }
  i++;
}

let ans = newArr.join("");
console.log(ans);