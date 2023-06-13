//Longest Common Prefix

let strs = ["flower", "flow", "flight"];

let prefix  = strs[0];

for(let i=1;i<strs.length;i++){
    let j=0;
    while(j<prefix.length && prefix[j]===strs[i][j]){
        j++;
    }
    prefix = prefix.slice(0,j);
    if(prefix===""){
        break;
    }
}

console.log(prefix);