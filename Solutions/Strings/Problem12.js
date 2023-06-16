//Pallindromic substrings

let isPalindromicString = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

var countSubstrings = function (s) {
  let substrings = [],
    count = 0;

  for (let i = 0; i < s.length; i++) {
    substrings.push(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      let temp = s.slice(i, j + 1);
      substrings.push(temp);
    }
  }

  for (let i of substrings) {
    if (isPalindromicString(i)) {
      count += 1;
    }
  }
  return count;
};


