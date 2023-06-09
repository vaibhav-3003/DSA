//Longest subarray with sum divisible by K

function longestSubarrayWithSumDivisibleByK(arr, k) {
  let maxLength = 0;
  let prefixSum = 0;
  let prefixSumMap = new Map();

  // Initialize the prefix sum map with the base case
  prefixSumMap.set(0, -1);

  for (let i = 0; i < arr.length; i++) {
    prefixSum = (prefixSum + arr[i]) % k;

    if (prefixSum < 0) {
      prefixSum += k; // Ensure positive modulo value
    }

    if (prefixSumMap.has(prefixSum)) {
      maxLength = Math.max(maxLength, i - prefixSumMap.get(prefixSum));
    } else {
      prefixSumMap.set(prefixSum, i);
    }
  }

  return maxLength;
}

const arr = [7, 8, 10];
const k = 3;

const result = longestSubarrayWithSumDivisibleByK(arr, k);
console.log(result);