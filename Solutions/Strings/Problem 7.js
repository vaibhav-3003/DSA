// Print all the Duplicates in the Input String

let str = "geeksforgeeks";

let count = {};

for(let i = 0; i <str.length;i++){
    let temp = str[i];
    count[str[i]] = 0;
    for(let j=0;j<str.length;j++){
        if(str[j]===temp){
             count[temp]+=1;
        }
    } 
}
console.log(count);