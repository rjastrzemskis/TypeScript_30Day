function fiveAndGreaterOnly(arr: number[]): number[] {
  return arr.filter((arr) => arr > 5);
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
