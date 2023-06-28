//Summary ranges
var summaryRanges = function (nums) {
  let result = [];
  let newRange = true;
  for (let i = 0; i < nums.length; i++) {
    if (newRange) {
      PointA = nums[i];
      newRange = false;
    }
    if (nums[i + 1] != nums[i] + 1) {
      newRange = true;
      if (PointA != nums[i]) result.push(`${PointA}->${nums[i]}`);
      else result.push(`${nums[i]}`);
    }
  }
  return result;
};