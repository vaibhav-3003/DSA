//Next Permutations
function permute(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const rest = arr.filter((_, index) => index !== i);
    const permutations = permute(rest);

    for (const perm of permutations) {
      result.push([num, ...perm]);
    }
  }

  return result;
}

const arr = [1, 2, 3];
const permutations = permute(arr);

const index = permutations.findIndex((subArray) => {
  return (
    Array.isArray(subArray) &&
    subArray.length === arr.length &&
    subArray.every((element, i) => element === arr[i])
  );
});
console.log(permutations[index+1]);