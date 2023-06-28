// Array Intersection II
var intersect = function (nums1, nums2) {
  const map1 = nums1.reduce(
    (acc, num) => ({
      ...acc,
      [num]: (acc[num] ?? 0) + 1,
    }),
    {}
  );
  const map2 = nums2.reduce(
    (acc, num) => ({
      ...acc,
      [num]: (acc[num] ?? 0) + 1,
    }),
    {}
  );
  return Object.keys(map1).flatMap((num) => {
    const count = Math.min(map1[num], map2[num] ?? 0);
    return Array(count).fill(num);
  });
};