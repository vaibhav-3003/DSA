// Valid Anagram

var isAnagram = function (s, t) {
  let sArray = s.split("");
  let tArray = t.split("");

  sArray.sort();
  tArray.sort();

  let newS = sArray.join("");
  let newT = tArray.join("");

  if (newS === newT) {
    return true;
  } else {
    return false;
  }
};

let s = "rat";
let t = "car";

console.log(isAnagram(s,t));