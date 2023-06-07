// Kth Largest Element in an Array

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;

// Sort the array in descending order
nums.sort((a, b) => b - a);

// Retrieve the Kth largest element
let kthLargest = nums[k - 1];

console.log(kthLargest);