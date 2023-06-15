//Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (str) {
  let charSet = new Set();

  let start = 0;
  let res = 0;

  for (let end = 0; end < str.length; end++) {
    while (charSet.has(str[end])) {
      charSet.delete(str[start]);
      start += 1;
    }
    charSet.add(str[end]);
    res = Math.max(res, end - start + 1);
  }
  return res;
};

let str = "abcabcabb";
console.log(lengthOfLongestSubstring(str)); //3