function positivesum(arr: number[]): number {
  return arr.filter((x) => x >= 0).reduce((temp, change) => temp + change, 0);
}

console.log(positivesum([1, -4, 7, 12])); // => 1 + 7 + 12 = 20

