//Repeat and Missing Number

let arr = [3,1,2,5,3];

let A,B;

for(i in arr){
    for(j in arr){
        if(i!==j){
            if(arr[i]===arr[j]){
                A = arr[j];
            }
        }
    }
}

let set = new Set(arr);
let disArr = [...set];

disArr.sort((a,b) => a-b);

for(let i=0;i<disArr.length-1;i++){
    if(disArr[i]!==disArr[i]+1){
        B = disArr[i]+1;
    }
}

console.log([A,B]);

