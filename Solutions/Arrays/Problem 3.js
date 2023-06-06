//Maximum sub-array

//Note: First find all the sub arrays of that array

let arr = [5, 4, -1, 7, 8];
let subArray = [];
let maxLength = -10;
let indexOfSubArray;

//This loop will calculate all the sub arrays
for(let i=0; i<arr.length; i++) {
    for(let j=0; j<=arr.length; j++) {
        if(i!==j && j>i){
            subArray.push(arr.slice(i,j));
        }
    };
}

//Now find the subarray which have maximum length
subArray.forEach((element,index)=>{
    let sum = 0;
    for(let i=0;i<element.length;i++){
        sum+=element[i];
    }

    if(sum>maxLength){
        maxLength = 0;
        maxLength = sum;
        indexOfSubArray = index;
    }
})

console.log(subArray[indexOfSubArray],maxLength);