//Longest Repeating Character Replacement

let str = "AABABB",
  k = 1,
  count = {},
  res = 0;
let start=0;

for(let end=0;end<str.length;end++){
    count[str[end]] = (count[str[end]] || 0) + 1 ;

    while((end-start+1) - Math.max(...Object.values(count)) > k){
        count[str[start]] -= 1
        start+=1;
    }
    res = Math.max(res, end - start + 1);  
}
console.log(res);
// console.log(Object.values(count));


