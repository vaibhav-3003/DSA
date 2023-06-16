// Longest Palindromic Substring
var longestPalindrome = function (s) {
  let res = "",
    resLength = 0;

  for (let i = 0; i < s.length; i++) {
    //odd length substrings
    let l = i,
      r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLength) {
        res = s.slice(l, r + 1);
        resLength = r - l + 1;
      }
      l -= 1;
      r += 1;
    }

    //even length
    (l = i), (r = i + 1);
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLength) {
        res = s.slice(l, r + 1);
        resLength = r - l + 1;
      }
      l -= 1;
      r += 1;
    }
  }
  return res;
};