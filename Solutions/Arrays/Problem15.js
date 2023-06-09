let target = "c";

let letters = ["c", "f", "j"];
let ans = "";

for(let i of letters){
    if(i>target){
        ans+=i;
        break;
    }
}
console.log(ans);