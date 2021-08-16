function squarecalsum(arr: number[]): number {
  return arr
    .map((num) => num ** 2)
    .reduce((currentsum, number) => currentsum + number, 0);
}

console.log(squarecalsum([1, 2, 2])); // => 1^2 + 2^2 + 2^2 = 9.
