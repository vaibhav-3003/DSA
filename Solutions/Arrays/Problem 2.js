//Reverse the array

//Iterative way:
//Note : Loop only till the middle of the array

let arr = [1,2,3];
let arr2 = [4,5,6];

for (let i = 0; i < Math.floor(arr.length/2); i++){
    let c = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = c;
}
console.log(arr); //[3,2,1]

//By function
console.log(arr2.reverse()); //[6,5,4]

