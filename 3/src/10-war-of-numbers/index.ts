/**
 * There's a great war between the even and odd numbers.
 * Many numbers already lost their life in this war and it's your task to end this.
 * You have to determine which group is larger: the even, or the odd. The larger group wins.
 * Create a function that takes an array of integers, sums the even and odd numbers seperately,
 * then returns "Odd numbers win by X" or "Even numbers win by X", X is survivors.
 * If both groups are equal, return "There are no winners"
 */

function warOfNumbers(numbers: number[]) {
  let i, sumeven = 0, sumodd = 0;
  for (i = 0; i < numbers.length; i++) {
    numbers[i] % 2 === 0 ? (sumeven += numbers[i]) : (sumodd += numbers[i]);
  }
  return sumeven > sumodd
    ? "Even numbers win by " + (sumeven - sumodd)
    : sumeven < sumodd
    ? "Odd numbers win by " + (sumodd - sumeven)
    : "There are no winners";
}

export { warOfNumbers };
