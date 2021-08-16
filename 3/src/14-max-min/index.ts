/**
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order in a new array.
 */

function maxMin(numbers: number[]):number[] {
  const minimum = Math.min(...numbers);
  const maximum = Math.max(...numbers);
  const result = [minimum, maximum];
  return result;
}
export { maxMin };
