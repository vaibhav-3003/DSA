var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  let longest = 0;

  for (i of nums) {
    //Check if it start of a sequence
    if (!numSet.has(i - 1)) {
      let length = 0;
      while (numSet.has(i + length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};
