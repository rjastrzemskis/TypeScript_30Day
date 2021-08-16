function flatten(arr:(string | boolean | number )[][]) {
  return arr.flat();
}
const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];