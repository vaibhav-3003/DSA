// 4 sum
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = [],
    quad = [];

  let kSum = (k, start, target) => {
    if (k !== 2) {
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) {
          continue;
        }
        quad.push(nums[i]);
        kSum(k - 1, i + 1, target - nums[i]);
        quad.pop();
      }
      return;
    }
    //base case
    let l = start,
      r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] < target) {
        l += 1;
      } else if (nums[l] + nums[r] > target) {
        r -= 1;
      } else {
        res.push([...quad, nums[l], nums[r]]);
        l += 1;
        while (l < r && nums[l] === nums[l - 1]) {
          l += 1;
        }
      }
    }
  };
  kSum(4, 0, target);
  return res;
};