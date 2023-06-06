//Contains Duplicate in the array

let arr = [1,2,3];
let set = new Set(arr);

if(arr.length !== set.size){
    console.log("Duplicate");
}else{
    console.log("Not a Duplicate");
}

