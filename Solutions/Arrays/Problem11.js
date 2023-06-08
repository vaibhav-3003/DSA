//Merged Overlapping Intervals

var isOverlapping = (arr, top) => {
  let count = 0;
  for (let i of arr) {
    if ((i >= top[0] && i <= top[1]) || i === top[1] + 1) {
      count += 1;
    }
  }

  if (count === 2) {
    return true;
  }
  return false;
};

let arr = [
  [1, 9],
  [2, 4],
  [4, 7],
  [6, 8],
];

arr.sort((a, b) => a[0] - b[0]);

let top = arr[0];
let newIntervals = [top]; // Start with the first interval

for (let i = 1; i < arr.length; i++) {
  let interval = arr[i];
  if (isOverlapping(interval, top)) {
    let temp = [...interval, ...top];
    let min = Math.min(...temp);
    let max = Math.max(...temp);
    newIntervals[newIntervals.length - 1] = [min, max]; // Replace the previous interval with the merged interval
  } else {
    newIntervals.push(interval); // Add the non-overlapping interval
    top = interval; // Update the current top interval
  }
}

console.log(newIntervals);
