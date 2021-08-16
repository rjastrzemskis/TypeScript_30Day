/**
 * Write a function that rounds up the given number to two decimal places.
 *
 * Example
 *
 * Input: 4.555
 *
 * Output: 4.56
 */

function roundTofixed(input: number): number {
  return Math.round(input * 100) / 100;
}

export { roundTofixed };
