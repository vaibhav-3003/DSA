// Given an Array of Numbers Arrange the Numbers to Form the Biggest Number
//Note : We need to create a modified sort() function to check which is greater XY or YX and according to that arranged array

let arr = [54,546,548,60];

arr.sort((X,Y)=>{
    X = X.toString();
    Y = Y.toString();

    let XY = X + Y;
    let YX = Y + X;

    return (YX -XY);
})

let ans = parseInt(arr.join(''));

console.log(ans);

