// Compare Version Numbers
var compareVersion = function (version1, version2) {
  //converting into array by splitting at .
  version1 = version1.split(".");
  version2 = version2.split(".");
  // Finding the max length of either array
  let length = Math.max(version1.length, version2.length);

  // Iterate over the length
  for (let i = 0; i < length; i++) {
    if ((+version1[i] || 0) < (+version2[i] || 0)) return -1;
    if ((+version1[i] || 0) > (+version2[i] || 0)) return 1;
  }
  return 0;
};
