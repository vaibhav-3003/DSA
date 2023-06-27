// Move Zeroes

var moveZeroes = function (nums) {
  let non_zeroes = [];
  let zeroes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes += 1;
    } else {
      non_zeroes.push(nums[i]);
    }
  }

  nums.length = 0;

  for (let i = 0; i < non_zeroes.length; i++) {
    nums.push(non_zeroes[i]);
  }

  for (let i = 0; i < zeroes; i++) {
    nums.push(0);
  }
};