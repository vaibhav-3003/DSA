//Find minimum number of merge operations to make an array palindrome

let isPalindrome = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}; 

let palindrome = (arr,operations)=>{
    if(arr.length<=1){
        return operations; 
    }
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      if (arr[i] !== arr[arr.length - i - 1]) {
        let index = arr.indexOf(arr[arr.length - i - 1]);
        arr.splice(index,1);
        operations += 1;
      }
    }
    if (isPalindrome(arr)) {
      return operations;
    } else {
      return palindrome(arr, operations);
    }
}

let arr = [1, 4, 5, 1];
let operations = 0;

let maxOperations = palindrome(arr,operations);
console.log(maxOperations);


