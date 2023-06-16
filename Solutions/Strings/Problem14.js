let nums = [1],k = 1;
let frequency = {},ans = [];

for (let i = 0; i < nums.length; i++) {
  frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
}

for(let i=0;i<k;i++){
    let maxValue = Math.max(...Object.values(frequency));
    let key = Object.keys(frequency).find((key)=> frequency[key]===maxValue);
    ans.push(parseInt(key));

    //remove the key and max-value
    delete frequency[key];
}
console.log(ans);
