// Space optimization using bit manipulations

let m = 2;
let n = 10;

for(let i=m;i<=n;i++) {
    if(i%2===0 || i%5===0){
        console.log(i);
    }
}